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

  const iframeCode = `<iframe src="data:text/html;base64,CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubyI+CiAgPHRpdGxlPkRhbmkgVGhvbXBzb24gLSBEaWdpdGFsIEJ1c2luZXNzIENhcmQ8L3RpdGxlPgogIDxzdHlsZT4KICAgICogewogICAgICBtYXJnaW46IDA7CiAgICAgIHBhZGRpbmc6IDA7CiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7CiAgICAgIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2FiZTsKICAgIH0KCiAgICBib2R5IHsKICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOwogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjYWJlOwogICAgICBtYXJnaW46IDA7CiAgICAgIHBhZGRpbmc6IDA7CiAgICB9CgogICAgLmNhcmQtd3JhcHBlciB7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBoZWlnaHQ6IDEwMHZoOwogICAgfQoKICAgIC5jYXJkIHsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2FiZTsKICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTsKICAgICAgbWF4LXdpZHRoOiA0NDhweDsKICAgICAgd2lkdGg6IDkwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7CiAgICAgIHBhZGRpbmc6IDI0cHg7CiAgICAgIG1hcmdpbjogMDsKICAgIH0KCiAgICAuaGVhZGVyIHsKICAgICAgd2lkdGg6IDEwMCU7CiAgICAgIGhlaWdodDogMjU2cHg7CiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21zZ3NuZHIvTVpXZFFsZ0lUWm85bW0xMzc2RHYvbWVkaWEvNjc0OTJiYzk2YTI4OTQyNzJmOGMyNWQ3LmpwZWcnKTsKICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsKICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICB9CgogICAgLmxvZ28gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogMjRweDsKICAgICAgcmlnaHQ6IDI0cHg7CiAgICAgIHdpZHRoOiA2NHB4OwogICAgICBoZWlnaHQ6IDY0cHg7CiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47CiAgICB9CgogICAgLmhlYWRlci10ZXh0IHsKICAgICAgY29sb3I6IHdoaXRlOwogICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTsKICAgIH0KCiAgICAuaGVhZGVyIHRleHQgewogICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjsKICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgIH0KCiAgICAuaGVhZGVyIGgxIHsKICAgICAgZm9udC1zaXplOiAzMHB4OwogICAgICBmb250LXdlaWdodDogYm9sZDsKICAgIH0KCiAgICAuaGVhZGVyIHAgewogICAgICBmb250LXNpemU6IDIwcHg7CiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7CiAgICB9CgogICAgLmNvbnRhY3QgaW5mbyB7CiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsKICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICBtYXJnaW46IDI0cHg7CiAgICB9CgogICAgLnNvY2lhbC1saW5rcyB7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICBnYXA6IDI0cHg7CiAgICB9CgogICAgLnNvY2lhbC1saW5rIHsKICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgICAgIGNvbG9yOiAjMDA2NzRmOwogICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7CiAgICAgIHdpZHRoOiAyNHB4OwogICAgICBoZWlnaHQ6IDI0cHg7CiAgICB9CgogICAgLnN2Zy1pY29uIHsKICAgICAgd2lkdGg6IDIwcHg7CiAgICAgIGhlaWdodDogMjBweDsKICAgIH0KCiAgICAuYWN0aW9uLWJ1dHRvbiB7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU1MTAzOwogICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7CiAgICAgIGNvbG9yOiAjY2VjYWJlOwogICAgICBib3JkZXI6IHNvbGlkICMwMDY3NGYgMXB4OwogICAgICBib3JkZXItcmFkaXVzOiAwLjU1cmVtOwogICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSwgY29sb3IgMC4yc2UgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7CiAgICB9CgogICAgLmFjdGlvbi1idXR0b246aG92ZXIgewogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2ODcyOwogICAgICBjb2xvcjogd2hpdGU7CiAgICB9CgogIDwvc3R5bGU+CjwvaGVhZD4KPGJvZHk+CiAgPGRpdiBjbGFzcz0iY2FyZC13cmFwcGVyIj4KICAgIDxkaXYgY2xhc3M9ImNhcmQiPgogICAgICA8ZGl2IGNsYXNzPSJoZWFkZXIiPgogICAgICAgIDxkaXYgY2xhc3M9ImxvZ28iIHN0eWxlPSJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMjRweDsgcmlnaHQ6IDI0cHg7IHdpZHRoOiA2NHB4OyBoZWlnaHQ6IDY0cHg7Ij48L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJoZWFkZXItdGV4dCI+CiAgICAgICAgICA8aDE+RGFuaSBUaG9tcHNvbjwvaDE+CiAgICAgICAgICA8cD5NYXJrZXRlcjwvcD4KICAgICAgICAgIDxwPlRob21wc29uIExpbWl0ZWQ8L3A+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb250YWN0IGluZm8iPgogICAgICAgIDxkaXY+CiAgICAgICAgICA8YSBocmVmPSJ0ZWw6KzE0NDA1MDM4MDExIiBjbGFzcz0iY29udGFjdC1saW5rIj4KICAgICAgICAgICAgPHN2ZyBjbGFzcz0ic3ZnLWljb24iIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICAgICAgNDQwLTUwMy04MDExCiAgICAgICAgICA8L2E+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdj4KICAgICAgICAgIDxhIGhyZWY9Im1haWx0bzpkYW5pQGRhbml0aG9tcHNvbmx0ZC5jb20iIGNsYXNzPSJjb250YWN0LWxpbmsiPgogICAgICAgICAgICA8c3ZnIGNsYXNzPSJzdmctaWNvbiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgICAgICBkYW5pQGRhbml0aG9tcHNvbmx0ZC5jb20KICAgICAgICAgIDwvYT4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2PgogICAgICAgICAgPGEgaHJlZj0iaHR0cHM6Ly9kYW5pdGhvbXBzb25sdGQuY29tL3NjaGVkdWxlLWEtY2FsbC1kYW5pdGhvbXBzb24iIGNsYXNzPSJjb250YWN0LWxpbmsiPgogICAgICAgICAgICA8c3ZnIGNsYXNzPSJzdmctaWNvbiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICAgICAgICBkYW5pdGhvbXBzb25sdGQuY29tCiAgICAgICAgICA8L2E+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJzb2NpYWwtbGlua3MiPgogICAgICAgIDxhIGhyZWY9Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kYW5pZWxsZS10aG9tcHNvbi1jbGV2ZWxhbmQvIiBjbGFzcz0ic29jaWFsLWxpbmsiPgogICAgICAgICAgPHN2ZyBjbGFzcz0ic3ZnLWljb24iIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICAgIDwvYT4KICAgICAgICA"
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