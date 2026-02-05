import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  panelName: string;
  onProceed: () => void;
}

export default function IndicatorSelectModal({
  open,
  onOpenChange,
  panelName,
  onProceed,
}: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Modal */}
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[640px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl">

          <Dialog.Title className="text-lg font-semibold mb-2">
            Select indicators — {panelName}
          </Dialog.Title>

          <p className="text-sm text-muted-foreground mb-6">
            Indicator selection step. (We enhance UI later.)
          </p>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="button"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={onProceed}
            >
              Proceed to Review
            </Button>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
