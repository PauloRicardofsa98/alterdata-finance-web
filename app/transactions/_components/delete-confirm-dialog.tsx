"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";
import { deleteTransaction } from "@/app/transactions/_actions/delete-transaction";

interface DeleteConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transactionId: string;
  transactionDescription: string;
}

const DeleteConfirmDialog = ({
  open,
  onOpenChange,
  transactionId,
  transactionDescription,
}: DeleteConfirmDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    const result = await deleteTransaction(transactionId);

    if (result.success) {
      toast.success("Transação excluída!");
      onOpenChange(false);
    } else {
      result.errors?.forEach((error) => toast.error(error));
    }
    setIsDeleting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Excluir Transação</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja excluir &quot;{transactionDescription}
            &quot;? Esta ação não pode ser desfeita.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-2 pt-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
          >
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Excluindo..." : "Excluir"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmDialog;
