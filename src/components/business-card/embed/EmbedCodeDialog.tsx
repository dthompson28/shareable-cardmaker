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

  const iframeCode = `<iframe
  src="data:text/html;base64,CjwhRE9DVFlQRSBodG1sPgo8aHRtbCBsYW5nPSJlbiI+CjxoZWFkPgogIDxtZXRhIGNoYXJzZXQ9IlVURi04Ij4KICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8iPgogIDxzdHlsZT4KICAgICogewogICAgICBtYXJnaW46IDA7CiAgICAgIHBhZGRpbmc6IDA7CiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOwogICAgICAtbW96LW9zeC1mb250LXNtZW50aDogZ3JheXNjYWxlOwogICAgfQoKICAgIGJvZHkgewogICAgICBtYXJnaW46IDA7CiAgICAgIHBhZGRpbmc6IDA7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7CiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgIHNhbnMtc2VyaWY7CiAgICB9CgogICAgLmhlYWRlciB7CiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21zZ3NuZHIvTVpXZFFsZ0lUWm85bW0xMzc2RHYvbWVkaWEvNjc0OTIyNTkzNDQ3YTU5NTk5MTIzMTU3LnBuZycpOwogICAgICBoZWlnaHQ6IDI1NnB4OwogICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOwogICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7CiAgICB9CgogICAgLmhlYWRlci1jb250ZW50IHsKICAgICAgcGFkZGluZzogMjRweDsKICAgIH0KCiAgICAjaGVhZGVyLXRleHQgewogICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzYW5zLXNlcmlmOwogICAgICBjb2xvcjogI2ZmZjsKICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAgMCAwIC4yKTsKICAgIH0KCiAgICAjaGVhZGVyLXRleHQgaDEgewogICAgICBmb250LXNpemU6IDMwcHg7CiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICBtYXJnaW46IDAgMCAxMHB4OwogICAgfQoKICAgICNoZWFkZXItdGV4dCBwIHsKICAgICAgZm9udC1zaXplOiAyMHB4OwogICAgICBmb250LXdlaWdodDogbm9ybWFsOwogICAgICBtYXJnaW46IDAgMCA1cHg7CiAgICB9CgogICAgI2NvbnRhY3QtaW5mbyB7CiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgIHNhbnMtc2VyaWY7CiAgICAgIGZvbnQtc2l6ZTogMTZweDsKICAgICAgbWFyZ2luOiAwIDAgMjRweDsKICAgIH0KCiAgICAuaWNvbiB7CiAgICAgIHdpZHRoOiAyMHB4OwogICAgICBoZWlnaHQ6IDIwcHg7CiAgICAgIG1hcmdpbi1yaWdodDogNXB4OwogICAgICBmaWxsOiAjMDBmOwogICAgfQogIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5PgogICAgPGRpdiBjbGFzcz0iaGVhZGVyIj4KICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyLWNvbnRlbnQiPgogICAgICAgIDxpbWcgc3JjPSJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbXNnc25kci9NWldkUWxnSVRabzltbTEzNzZEdi9tZWRpYS82NzQ5MjI1OTM0NDdhNTk1OTkxMjMxNTcucG5nIiBhbHQ9IkNvbnRhY3QgTG9nbyIgLz4KICAgICAgICA8ZGl2IGlkPSJoZWFkZXItdGV4dCI+CiAgICAgICAgICA8aDE+RGFuaSBUaG9tcHNvbjwvaDE+CiAgICAgICAgICA8cD5NYXJrZXRlcjwvcD4KICAgICAgICAgIDxwPlRob21wc29uIExpbWl0ZWQ8L3A+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8ZGl2IGlkPSJjb250YWN0LWluZm8iPgogICAgICA8ZGl2IGNsYXNzPSJjb250YWN0LWl0ZW0iPgogICAgICAgIDxzdmcgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyYy4xMjcuOTYuMzYxIDEuOTAzLjcgMi44MWEyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1Yy45MDcuMzM5IDEuODUuNTczIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6Ii8+CiAgICAgIDwvc3ZnPgogICAgICAgIDxzcGFuPkRhbmk6ICg0NDApIDUwMy04MDExPC9zcGFuPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY29udGFjdC1pdGVtIj4KICAgICAgICA8c3ZnIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgICA8cGF0aCBkPSJNMyAxNy42MkwxNy42MiAzLjQyYTMgMyAwIDEgMSA0LjI1IDQuMjVsLTEzLjE5IDEzLjE5Ii8+CiAgICAgICAgPC9zdmc+CiAgICAgICAgPHNwYW4+ZG9lQGVtYWlsLmNvbTwvc3Bhbj4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICA8L2JvZHk+CjwvaHRtbD4="
  style="width: 448px; max-width: 90%; height: 256px; padding: 24px; margin: 24px; border: none;">
</iframe>`;

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