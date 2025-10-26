#!/usr/bin/env python3
"""
Generate PNG icons for the Teal Smile extension
Requires: pip install pillow
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    import sys
    
    # Define icon sizes
    sizes = [16, 48, 128]
    
    # Colors
    TEAL = (20, 184, 166)
    GOLD = (251, 191, 36)
    WHITE = (255, 255, 255)
    
    print("Generating PNG icons...")
    
    for size in sizes:
        # Create image with transparent background
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Draw rounded rectangle background (teal)
        corner_radius = int(size * 0.15625)  # 20px at 128px size
        padding = int(size * 0.03125)  # 4px at 128px size
        
        # Draw teal background
        draw.rounded_rectangle(
            [(padding, padding), (size - padding, size - padding)],
            radius=corner_radius,
            fill=TEAL,
            outline=GOLD,
            width=max(2, int(size * 0.03125))
        )
        
        # Draw smiley face
        if size >= 48:
            face_center = size // 2
            face_radius = int(size * 0.3)
            
            # Face circle
            draw.ellipse(
                [(face_center - face_radius, face_center - face_radius),
                 (face_center + face_radius, face_center + face_radius)],
                fill=WHITE
            )
            
            # Eyes
            eye_y = face_center - int(face_radius * 0.2)
            eye_offset = int(face_radius * 0.4)
            eye_radius = max(2, int(size * 0.03))
            
            draw.ellipse(
                [(face_center - eye_offset - eye_radius, eye_y - eye_radius),
                 (face_center - eye_offset + eye_radius, eye_y + eye_radius)],
                fill=TEAL
            )
            draw.ellipse(
                [(face_center + eye_offset - eye_radius, eye_y - eye_radius),
                 (face_center + eye_offset + eye_radius, eye_y + eye_radius)],
                fill=TEAL
            )
            
            # Smile
            smile_y = face_center + int(face_radius * 0.2)
            smile_width = int(face_radius * 0.8)
            draw.arc(
                [(face_center - smile_width // 2, smile_y - smile_width // 4),
                 (face_center + smile_width // 2, smile_y + smile_width // 4)],
                start=0,
                end=180,
                fill=TEAL,
                width=max(2, int(size * 0.02))
            )
        elif size >= 16:
            # Simplified face for small icon
            face_center = size // 2
            face_radius = size // 3
            
            draw.ellipse(
                [(face_center - face_radius, face_center - face_radius),
                 (face_center + face_radius, face_center + face_radius)],
                fill=WHITE
            )
            
            # Simple smile
            draw.arc(
                [(face_center - face_radius // 2, face_center - face_radius // 2),
                 (face_center + face_radius // 2, face_center + face_radius // 2)],
                start=0,
                end=180,
                fill=TEAL,
                width=1
            )
        
        # Save icon
        filename = f'icon{size}.png'
        img.save(filename, 'PNG')
        print(f"✓ Generated {filename}")
    
    print("\nDone! All icons generated successfully.")
    
except ImportError:
    print("Error: Pillow library not found.")
    print("Please install it first: pip install pillow")
    print("\nOr use one of the alternative methods described in README.md")
    sys.exit(1)
except Exception as e:
    print(f"Error generating icons: {e}")
    sys.exit(1)
