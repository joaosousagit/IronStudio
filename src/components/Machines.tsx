import { Dumbbell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
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
export const Machines = () => {
  const navigate = useNavigate();
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchMachines();
  }, []);
  const fetchMachines = async () => {
    try {
      const {
        data,
        error
      } = await supabase
        .from("machines")
        .select("*")
        .eq("is_featured", true)
        .order("display_order", {
          ascending: true
        })
        .limit(3);
      if (error) throw error;
      setMachines(data || []);
    } catch (error) {
      console.error("Error fetching machines:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleNavigate = () => {
    navigate("/maquinas");
    window.scrollTo(0, 0);
  };
  return <section id="machines" className="py-20 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
              As Melhores Máquinas do Mercado
            </span>
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground-light))] max-w-2xl mx-auto">
            Marcas líderes mundiais em equipamento de fitness profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? <div className="col-span-full text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-[hsl(var(--muted-foreground-light))]">Carregando máquinas...</p>
            </div> : machines.length === 0 ? <div className="col-span-full text-center py-12">
              <p className="text-[hsl(var(--muted-foreground-light))]">Nenhuma máquina disponível no momento.</p>
            </div> : machines.map(item => {
          const IconComponent = (Icons as any)[item.icon_name] || Dumbbell;
          return <div key={item.id} className="bg-white border border-[hsl(var(--border-light))] hover-3d group overflow-hidden rounded-2xl shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image_url} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
                    
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
                    <p className="text-[hsl(var(--muted-foreground-light))] text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>;
        })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={handleNavigate} className="group hover-3d">
            Ver Todas as Máquinas
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};