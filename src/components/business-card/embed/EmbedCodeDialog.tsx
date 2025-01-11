import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { toast } from "sonner";
import { BusinessCardData } from "../../BusinessCardForm";

interface EmbedCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: BusinessCardData;
}

export const EmbedCodeDialog = ({ open, onOpenChange, data }: EmbedCodeDialogProps) => {
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Embed code copied to clipboard!");
  };

  const iframeCode = `<iframe src="data:text/html;base64,CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubyI+CiAgPHRpdGxlPkRpZ2l0YWwgQnVzaW5lc3MgQ2FyZDwvdGl0bGU+CiAgPGxpbmsgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OndnaHRANDAwOzUwMDs2MDA7NzAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAiIHJlbD0ic3R5bGVzaGVldCI+CiAgPHN0eWxlPgogICAgKiB7CiAgICAgIG1hcmdpbjogMDsKICAgICAgcGFkZGluZzogMDsKICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsKICAgICAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOwogICAgfQoKICAgIGJvZHkgewogICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7CiAgICAgIG1hcmdpbjogMDsKICAgICAgcGFkZGluZzogMDsKICAgIH0KCiAgICAuaGVhZGVyIHsKICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgaGVpZ2h0OiAyNTZweDsKICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsKICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOwogICAgfQoKICAgIC5oZWFkZXItdGV4dCB7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgYm90dG9tOiAxLjVyZW07CiAgICAgIGxlZnQ6IDEuNXJlbTsKICAgICAgY29sb3I6IHdoaXRlOwogICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpOwogICAgfQoKICAgIC5oZWFkZXItdGV4dCBoMSB7CiAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmOwogICAgICBmb250LXNpemU6IDMwcHg7CiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07CiAgICB9CgogICAgLmhlYWRlci10ZXh0IHAgewogICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjsKICAgICAgZm9udC1zaXplOiAyMHB4OwogICAgICBmb250LXdlaWdodDogbm9ybWFsOwogICAgICBtYXJnaW46IDAuMjVyZW0gMDsKICAgIH0KCiAgICAuY29udGFjdC1pbmZvIHsKICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgIHBhZGRpbmc6IDEuNXJlbTsKICAgIH0KCiAgICAuY29udGFjdC1saW5rIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgZ2FwOiAwLjc1cmVtOwogICAgICBjb2xvcjogaW5oZXJpdDsKICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOwogICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOwogICAgfQoKICAgIC5jb250YWN0LWxpbmsgc3ZnIHsKICAgICAgd2lkdGg6IDIwcHg7CiAgICAgIGhlaWdodDogMjBweDsKICAgIH0KCiAgICAuc29jaWFsLWxpbmtzIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGdhcDogMS41cmVtOwogICAgICBwYWRkaW5nOiAxLjVyZW07CiAgICB9CgogICAgLnNvY2lhbC1saW5rIHsKICAgICAgd2lkdGg6IDIwcHg7CiAgICAgIGhlaWdodDogMjBweDsKICAgICAgY29sb3I6IGluaGVyaXQ7CiAgICB9CiAgPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KICA8ZGl2IGNsYXNzPSJjYXJkIj4KICAgIDxkaXYgY2xhc3M9ImhlYWRlciI+CiAgICAgIDxkaXYgY2xhc3M9ImhlYWRlci10ZXh0Ij4KICAgICAgICA8aDE+RGFuaSBUaG9tcHNvbjwvaDE+CiAgICAgICAgPHA+TWFya2V0ZXI8L3A+CiAgICAgICAgPHA+VGhvbXBzb24gTGltaXRlZDwvcD4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9ImNvbnRhY3QtaW5mbyI+CiAgICAgIDxhIGhyZWY9InRlbDorMTQ0MDUwMzgwMTEiIGNsYXNzPSJjb250YWN0LWxpbmsiPgogICAgICAgIDxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgPHBhdGggZD0iTTIyIDE2Ljkydi0zYTIgMiAwIDAgMC0yLjE4LTIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyYy4xMjcuOTYuMzYxIDEuOTAzLjcgMi44MWEyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1Yy45MDcuMzM5IDEuODUuNTczIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6Ii8+CiAgICAgICAgPC9zdmc+CiAgICAgICAgKzEgKDQ0MCkgNTAzLTgwMTEKICAgICAgPC9hPgogICAgICA8YSBocmVmPSJtYWlsdG86ZGFuaUBkYW5pdGhvbXBzb25sdGQuY29tIiBjbGFzcz0iY29udGFjdC1saW5rIj4KICAgICAgICA8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICAgIDxwYXRoIGQ9Ik00IDRoMTZjMS4xIDAgMiAuOSAyIDJ2MTJjMCAxLjEtLjkgMi0yIDJINGMtMS4xIDAtMi0uOS0yLTJWNmMwLTEuMS45LTIgMi0yeiIvPgogICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz0iMjIsNiAxMiwxMyAyLDYiLz4KICAgICAgICA8L3N2Zz4KICAgICAgICBkYW5pQGRhbml0aG9tcHNvbmx0ZC5jb20KICAgICAgPC9hPgogICAgPC9kaXY+CiAgPC9kaXY+CjwvYm9keT4KPC9odG1sPg==" style="width: 100%; height: 600px; border: none;">`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Embed Code</DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex-1 overflow-hidden flex flex-col">
          <p className="text-sm text-muted-foreground mb-4">
            Copy and paste this code into your HighLevel funnel:
          </p>
          <div className="flex-1 overflow-y-auto">
            <pre className="bg-secondary p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code className="text-sm">{iframeCode}</code>
            </pre>
          </div>
          <button
            onClick={() => handleCopyCode(iframeCode)}
            className="mt-4 w-full px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover:opacity-90"
            style={{ 
              backgroundColor: data.colors.primary,
              color: "#FFFFFF"
            }}
          >
            Copy Embed Code
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};