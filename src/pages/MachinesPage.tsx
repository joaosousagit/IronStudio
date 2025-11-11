import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Dumbbell, Award, Activity, Bike, TrendingUp, Plus, Pencil, Trash2, LogOut, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { MachineDialog } from "@/components/MachineDialog";
import { useToast } from "@/hooks/use-toast";
import * as Icons from "lucide-react";
interface Machine {
  id: string;
  name: string;
  brand: string;
  description: string;
  image_url: string;
  muscle_groups: string[];
  icon_name: string;
  display_order: number;
  is_featured: boolean;
}
const MachinesPage = () => {
  const navigate = useNavigate();
  const {
    user,
    isAdmin,
    loading: authLoading,
    signOut
  } = useAuth();
  const {
    toast
  } = useToast();
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingMachine, setEditingMachine] = useState<Machine | null>(null);
  useEffect(() => {
    fetchMachines();
  }, []);
  const fetchMachines = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from("machines").select("*").order("display_order", {
        ascending: true
      });
      if (error) throw error;
      setMachines(data || []);
    } catch (error: any) {
      toast({
        title: "Erro ao carregar máquinas",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta máquina?")) return;
    try {
      const {
        error
      } = await supabase.from("machines").delete().eq("id", id);
      if (error) throw error;
      toast({
        title: "Máquina excluída",
        description: "A máquina foi excluída com sucesso."
      });
      fetchMachines();
    } catch (error: any) {
      toast({
        title: "Erro ao excluir",
        description: error.message,
        variant: "destructive"
      });
    }
  };
  const handleEdit = (machine: Machine) => {
    setEditingMachine(machine);
    setDialogOpen(true);
  };
  const handleAdd = () => {
    setEditingMachine(null);
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    setEditingMachine(null);
  };

  const handleToggleFeatured = async (machine: Machine) => {
    // Check if we're trying to feature a machine and already have 3 featured
    const featuredCount = machines.filter(m => m.is_featured).length;
    
    if (!machine.is_featured && featuredCount >= 3) {
      toast({
        title: "Limite atingido",
        description: "Você só pode ter 3 máquinas em destaque. Remova uma antes de adicionar outra.",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase
        .from("machines")
        .update({ is_featured: !machine.is_featured })
        .eq("id", machine.id);

      if (error) throw error;

      toast({
        title: machine.is_featured ? "Removido dos destaques" : "Adicionado aos destaques",
        description: machine.is_featured 
          ? "Esta máquina não aparecerá mais na página principal." 
          : "Esta máquina agora aparece na página principal."
      });
      
      fetchMachines();
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar",
        description: error.message,
        variant: "destructive"
      });
    }
  };
  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Sessão encerrada",
      description: "Você saiu com sucesso."
    });
  };
  if (loading || authLoading) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>;
  }
  return <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <Button variant="ghost" onClick={() => navigate("/")} className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar ao Início
            </Button>

            {isAdmin && <div className="flex gap-2">
                <Button onClick={handleAdd} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Adicionar Máquina
                </Button>
                <Button onClick={handleSignOut} variant="outline" className="gap-2">
                  <LogOut className="w-4 h-4" />
                  Sair
                </Button>
              </div>}
          </div>

          <div className="text-center mb-16">
            
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
                As Melhores Máquinas do Mercado
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Marcas líderes mundiais em equipamento de fitness profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map(item => {
            const IconComponent = (Icons as any)[item.icon_name] || Dumbbell;
            return <div key={item.id} className="glass-strong hover-3d glow group overflow-hidden rounded-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image_url} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
                    
                    {/* Featured badge */}
                    {item.is_featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-xs font-bold">DESTAQUE</span>
                        </div>
                      </div>
                    )}
                    
                    {isAdmin && <div className="absolute top-4 left-4 flex gap-2">
                        <Button 
                          size="sm" 
                          variant={item.is_featured ? "default" : "secondary"}
                          onClick={() => handleToggleFeatured(item)} 
                          className="glass"
                          title={item.is_featured ? "Remover dos destaques" : "Adicionar aos destaques"}
                        >
                          <Star className={`w-4 h-4 ${item.is_featured ? 'fill-current' : ''}`} />
                        </Button>
                        <Button size="sm" variant="secondary" onClick={() => handleEdit(item)} className="glass">
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)} className="glass">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>}
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                        {item.brand}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black mb-3 uppercase tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>;
          })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              * Brevemente com fotos atualizadas de todo o nosso equipamento premium
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      <MachineDialog open={dialogOpen} onOpenChange={handleDialogClose} machine={editingMachine} onSuccess={fetchMachines} />
    </div>;
};
export default MachinesPage;