import os, re

LOGOS_DIR = "/Users/tim/Desktop/Iris Suite Projects/portfolio/public/logos"

def svg_to_jsx(svg_content):
    """Convert SVG attributes to JSX-compatible format and replace static fills with currentColor."""
    s = svg_content.strip()
    # Remove XML declaration
    s = re.sub(r'<\?xml[^?]*\?>', '', s)
    # Convert HTML attributes to JSX
    s = s.replace('clip-path', 'clipPath')
    s = s.replace('clip-rule', 'clipRule')
    s = s.replace('fill-rule', 'fillRule')
    s = s.replace('fill-opacity', 'fillOpacity')
    s = s.replace('stop-color', 'stopColor')
    s = s.replace('stroke-width', 'strokeWidth')
    s = s.replace('stroke-linecap', 'strokeLinecap')
    s = s.replace('stroke-linejoin', 'strokeLinejoin')
    s = s.replace('stroke-miterlimit', 'strokeMiterlimit')
    s = s.replace('xmlns:xlink', 'xmlnsXlink')
    s = s.replace('xlink:href', 'xlinkHref')
    return s

def replace_static_fills(svg, keep_gradients=True):
    """Replace static color fills with currentColor, preserving gradient fills."""
    # Replace fill="white", fill="#fff", fill="black", fill="#000" etc with currentColor
    # But keep fill="url(#...)" and fill="none" and fill="currentColor"
    def replace_fill(match):
        val = match.group(1).strip().strip('"').strip("'")
        if val == 'none' or val.startswith('url(') or val == 'currentColor':
            return match.group(0)
        return 'fill="currentColor"'
    
    s = re.sub(r'fill="([^"]*)"', replace_fill, svg)
    return s

# Define logo configs: (filename, component_name, use_dangerouslySetInnerHTML, preserve_colors)
logos = [
    ("fleet.svg", "FleetLogo", False, True),       # Has gradient - keep gradient, replace solid fills
    ("network.svg", "NetworkLogo", False, True),     
    ("r-one.svg", "ROneLogo", False, True),          
    ("Planet 3.svg", "Planet3Logo", True, True),     # Has gradient + complex paths
    ("sense.svg", "SenseLogo", False, True),         
    ("PayEz.svg", "PayEzLogo", False, True),         
    ("Feedzaa.svg", "FeedzaaLogo", False, True),     
    ("witnesschain.svg", "WitnesschainLogo", False, True),
]

output = 'import React from \'react\';\n\n'

for filename, comp_name, use_inner, preserve_colors in logos:
    filepath = os.path.join(LOGOS_DIR, filename)
    if not os.path.exists(filepath):
        print(f"SKIP: {filepath}")
        continue
    
    with open(filepath, 'r') as f:
        svg = f.read()
    
    jsx_svg = svg_to_jsx(svg)
    
    if preserve_colors:
        # For logos with gradients: replace solid fills but keep gradient refs
        # Replace known solid fills
        jsx_svg = jsx_svg.replace('fill="white"', 'fill="currentColor"')
        jsx_svg = jsx_svg.replace("fill='white'", "fill='currentColor'")
        jsx_svg = jsx_svg.replace('fill="#FFFFFF"', 'fill="currentColor"')
        jsx_svg = jsx_svg.replace('fill="#ffffff"', 'fill="currentColor"')
        jsx_svg = jsx_svg.replace('fill="#1B1464"', 'fill="currentColor"')
        jsx_svg = jsx_svg.replace('fill="black"', 'fill="currentColor"')
        jsx_svg = jsx_svg.replace('fill="#000000"', 'fill="currentColor"')
        jsx_svg = jsx_svg.replace('fill="#A4A4A4"', 'fill="currentColor"')
    
    if use_inner:
        # Escape backticks in SVG content
        escaped = jsx_svg.replace('`', '\\`').replace('${', '\\${')
        output += f'export const {comp_name} = ({{ className = "" }}: {{ className?: string }}) => (\n'
        output += f'  <div className={{className}} dangerouslySetInnerHTML={{{{ __html: `{escaped}` }}}} />\n'
        output += ');\n\n'
    else:
        # Extract the inner content and attributes from the <svg> tag
        # Add className prop to the svg element
        jsx_svg = re.sub(r'<svg\s', '<svg className={className} ', jsx_svg, count=1)
        output += f'export const {comp_name} = ({{ className = "" }}: {{ className?: string }}) => (\n'
        output += f'  {jsx_svg.strip()}\n'
        output += ');\n\n'

# Add AatralLogo using dangerouslySetInnerHTML with the dark version
aatral_path = os.path.join(LOGOS_DIR, "aatral_dark.svg")
with open(aatral_path, 'r') as f:
    aatral_svg = f.read()
aatral_jsx = svg_to_jsx(aatral_svg)
aatral_jsx = aatral_jsx.replace('fill="white"', 'fill="currentColor"')
aatral_jsx = aatral_jsx.replace("fill='white'", "fill='currentColor'")
escaped = aatral_jsx.replace('`', '\\`').replace('${', '\\${')
output += f'export const AatralLogo = ({{ className = "" }}: {{ className?: string }}) => (\n'
output += f'  <div className={{className}} dangerouslySetInnerHTML={{{{ __html: `{escaped}` }}}} />\n'
output += ');\n'

outpath = "/Users/tim/Desktop/Iris Suite Projects/portfolio/src/components/Logos.tsx"
with open(outpath, 'w') as f:
    f.write(output)

print(f"Generated Logos.tsx with {len(logos)+1} components")
