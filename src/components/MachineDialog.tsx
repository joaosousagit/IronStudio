import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Machine {
  id?: string;
  name: string;
  brand: string;
  description: string;
  image_url: string;
  muscle_groups: string[];
  icon_name: string;
  display_order: number;
}

interface MachineDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  machine?: Machine | null;
  onSuccess: () => void;
}

export const MachineDialog = ({ open, onOpenChange, machine, onSuccess }: MachineDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Machine>({
    name: "",
    brand: "",
    description: "",
    image_url: "",
    muscle_groups: [],
    icon_name: "Dumbbell",
    display_order: 0,
  });

  useEffect(() => {
    if (machine) {
      setFormData(machine);
    } else {
      setFormData({
        name: "",
        brand: "",
        description: "",
        image_url: "",
        muscle_groups: [],
        icon_name: "Dumbbell",
        display_order: 0,
      });
    }
  }, [machine, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (machine?.id) {
        const { error } = await supabase
          .from("machines")
          .update(formData)
          .eq("id", machine.id);

        if (error) throw error;

        toast({
          title: "Máquina atualizada",
          description: "A máquina foi atualizada com sucesso.",
        });
      } else {
        const { error } = await supabase
          .from("machines")
          .insert([formData]);

        if (error) throw error;

        toast({
          title: "Máquina adicionada",
          description: "A máquina foi adicionada com sucesso.",
        });
      }

      onSuccess();
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMuscleGroupsChange = (value: string) => {
    const groups = value.split(",").map(g => g.trim()).filter(g => g);
    setFormData({ ...formData, muscle_groups: groups });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{machine ? "Editar Máquina" : "Adicionar Máquina"}</DialogTitle>
          <DialogDescription>
            Preencha os dados da máquina abaixo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand">Marca</Label>
            <Input
              id="brand"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">URL da Imagem</Label>
            <Input
              id="image_url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              required
              placeholder="https://..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="muscle_groups">Grupos Musculares (separados por vírgula)</Label>
            <Input
              id="muscle_groups"
              value={formData.muscle_groups.join(", ")}
              onChange={(e) => handleMuscleGroupsChange(e.target.value)}
              required
              placeholder="Peito, Ombros, Tríceps"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="icon_name">Nome do Ícone</Label>
            <Input
              id="icon_name"
              value={formData.icon_name}
              onChange={(e) => setFormData({ ...formData, icon_name: e.target.value })}
              required
              placeholder="Dumbbell"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="display_order">Ordem de Exibição</Label>
            <Input
              id="display_order"
              type="number"
              value={formData.display_order}
              onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Salvando..." : machine ? "Atualizar" : "Adicionar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
