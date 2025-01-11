import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateHeaderSection, generateContactSection, generateSocialSection, generateActionButtonsSection } from "./generators/htmlSections";
import { generateScriptContent } from "./generators/scriptGenerator";

export const generateHeaderHTML = (data: BusinessCardData) => generateHeaderSection(data);
export const generateContactHTML = (data: BusinessCardData) => generateContactSection(data);
export const generateSocialHTML = (data: BusinessCardData) => generateSocialSection(data);
export const generateActionButtonsHTML = (data: BusinessCardData) => generateActionButtonsSection(data);
export const generateScriptHTML = (data: BusinessCardData) => `<script>${generateScriptContent(data)}</script>`;

export const generateEmbedCode = (data: BusinessCardData) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="Digital Business Card for ${data.name}">
    <meta name="author" content="${data.name}">
    <title>${data.name} - Digital Business Card</title>
    
    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Load fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Prevent flash of unstyled content -->
    <style>
        .business-card-wrapper { opacity: 0; }
        .fonts-loaded .business-card-wrapper { opacity: 1; transition: opacity 0.3s ease; }
    </style>
    
    <!-- Font loading detection -->
    <script>
        if ("fonts" in document) {
            Promise.all([
                document.fonts.load("400 1em 'Open Sans'"),
                document.fonts.load("400 1em 'Playfair Display'")
            ]).then(() => {
                document.documentElement.classList.add('fonts-loaded');
            });
        } else {
            document.documentElement.classList.add('fonts-loaded');
        }
    </script>
</head>
<body>
    <div class="business-card-wrapper">
        <div class="business-card">
            ${generateHeaderHTML(data)}
            <div class="content">
                ${generateContactHTML(data)}
                ${generateSocialHTML(data)}
                ${generateActionButtonsHTML(data)}
            </div>
        </div>
    </div>

    <!-- Inline JavaScript for card functionality -->
    <script>
        ${generateScriptContent(data)}
    </script>
</body>
</html>`;