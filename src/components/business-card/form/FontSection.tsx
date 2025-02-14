import { BusinessCardData } from "@/types/businessCard";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FontSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

const fonts = {
  heading: [
    { value: 'Playfair Display', label: 'Playfair Display' },
    { value: 'Open Sans', label: 'Open Sans' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Montserrat', label: 'Montserrat' },
    { value: 'Lato', label: 'Lato' },
    { value: 'Merriweather', label: 'Merriweather' },
    { value: 'Poppins', label: 'Poppins' },
    { value: 'Source Sans Pro', label: 'Source Sans Pro' },
    { value: 'Raleway', label: 'Raleway' },
  ],
  body: [
    { value: 'Open Sans', label: 'Open Sans' },
    { value: 'Playfair Display', label: 'Playfair Display' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Montserrat', label: 'Montserrat' },
    { value: 'Lato', label: 'Lato' },
    { value: 'Merriweather', label: 'Merriweather' },
    { value: 'Poppins', label: 'Poppins' },
    { value: 'Source Sans Pro', label: 'Source Sans Pro' },
    { value: 'Raleway', label: 'Raleway' },
  ],
};

export const FontSection = ({ data, onChange }: FontSectionProps) => {
  // Ensure fonts object exists with default values
  const currentFonts = data.fonts || { heading: 'Playfair Display', body: 'Open Sans' };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Font Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="heading-font">Heading Font</Label>
          <Select
            value={currentFonts.heading}
            onValueChange={(value) => onChange('fonts.heading', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select heading font" />
            </SelectTrigger>
            <SelectContent>
              {fonts.heading.map((font) => (
                <SelectItem key={font.value} value={font.value}>
                  <span style={{ fontFamily: font.value }}>{font.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="body-font">Body Font</Label>
          <Select
            value={currentFonts.body}
            onValueChange={(value) => onChange('fonts.body', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select body font" />
            </SelectTrigger>
            <SelectContent>
              {fonts.body.map((font) => (
                <SelectItem key={font.value} value={font.value}>
                  <span style={{ fontFamily: font.value }}>{font.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};