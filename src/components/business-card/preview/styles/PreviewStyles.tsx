import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateScript } from '../generators/ScriptGenerator';

interface PreviewStylesProps {
  data: BusinessCardData;
}

export const PreviewStyles = ({ data }: PreviewStylesProps) => {
  return (
    <>
      <style>
        {`
          :root {
            --primary: ${data.colors.primary};
            --secondary: ${data.colors.secondary};
            --accent: ${data.colors.accent};
            --background: ${data.colors.background};
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Open Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .business-card-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 448px;
            height: 500px;
            overflow: hidden;
          }
          .business-card {
            width: 100%;
            height: 100%;
            background-color: white;
            display: flex;
            flex-direction: column;
          }
          .header {
            position: relative;
            width: 100%;
            height: 160px;
            background-size: cover;
            background-position: center;
          }
          .header-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
          }
          .header-content {
            position: relative;
            height: 100%;
            padding: 1rem;
          }
          .header-logo {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 4rem;
            height: 4rem;
            object-fit: contain;
          }
          .header-text {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            color: white;
          }
          .header-text h1 {
            font-size: 1.75rem;
            margin-bottom: 0.25rem;
            font-weight: 700;
            font-family: 'Playfair Display', serif;
          }
          .header-text p {
            font-size: 1rem;
            margin: 0.125rem 0;
            opacity: 0.9;
            font-family: 'Playfair Display', serif;
          }
          .content {
            flex: 1;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          .contact-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--primary);
            text-decoration: none;
            font-size: 0.875rem;
            padding: 0.375rem;
            border-radius: 0.375rem;
            transition: background-color 0.2s;
          }
          .contact-link:hover {
            background-color: rgba(0, 103, 79, 0.1);
          }
          .contact-link svg {
            width: 1.25rem;
            height: 1.25rem;
            flex-shrink: 0;
          }
          .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 0.5rem 0;
          }
          .social-icon {
            color: var(--primary);
            width: 1.5rem;
            height: 1.5rem;
            transition: color 0.2s;
          }
          .social-icon:hover {
            color: var(--secondary);
          }
          .additional-links {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          .additional-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--secondary);
            text-decoration: none;
            font-size: 0.875rem;
            padding: 0.375rem;
            border-radius: 0.375rem;
            transition: all 0.2s;
          }
          .additional-link:hover {
            color: var(--accent);
          }
          .additional-link svg {
            width: 1.25rem;
            height: 1.25rem;
            color: var(--accent);
          }
          .action-buttons {
            display: flex;
            gap: 1rem;
            margin-top: auto;
          }
          .action-button {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }
          .share-button {
            background-color: var(--primary);
            color: white;
            border: none;
          }
          .share-button:hover {
            background-color: var(--secondary);
          }
          .save-button {
            background-color: white;
            color: var(--primary);
            border: 1px solid var(--primary);
          }
          .save-button:hover {
            background-color: var(--secondary);
            color: white;
            border-color: var(--secondary);
          }
          .section-highlight:hover {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
          }
          .section-selected {
            outline: 3px solid var(--accent) !important;
            outline-offset: 2px;
          }
        `}
      </style>
      <script dangerouslySetInnerHTML={{ __html: generateScript(data) }} />
    </>
  );
};
