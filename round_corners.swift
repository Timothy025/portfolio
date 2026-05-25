import Foundation
import AppKit

func addCornerRadius(imagePath: String, radius: CGFloat) {
    guard let image = NSImage(contentsOfFile: imagePath) else {
        print("Could not load image at \(imagePath)")
        return
    }
    
    let size = image.size
    let rect = NSRect(origin: .zero, size: size)
    
    let newImage = NSImage(size: size)
    newImage.lockFocus()
    
    let path = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
    path.addClip()
    
    image.draw(in: rect)
    
    newImage.unlockFocus()
    
    guard let tiffRepresentation = newImage.tiffRepresentation,
          let bitmapImage = NSBitmapImageRep(data: tiffRepresentation),
          let pngData = bitmapImage.representation(using: .png, properties: [:]) else {
        print("Failed to convert image to PNG data")
        return
    }
    
    do {
        try pngData.write(to: URL(fileURLWithPath: imagePath))
        print("Successfully rounded \(imagePath)")
    } catch {
        print("Failed to save image \(imagePath): \(error)")
    }
}

let fileManager = FileManager.default
let folderPath = "public/Fleet"

do {
    let items = try fileManager.contentsOfDirectory(atPath: folderPath)
    for item in items where item.hasSuffix(".png") {
        let fullPath = folderPath + "/" + item
        print("Processing \(fullPath)...")
        addCornerRadius(imagePath: fullPath, radius: 24.0)
    }
} catch {
    print("Error reading directory: \(error)")
}
