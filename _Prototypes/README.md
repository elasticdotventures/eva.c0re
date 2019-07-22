```asciiart

     _____________________________
    /                            /\
   /   EVA.C0re                _/ /\
  /   _Prototypes README      / \/
 /   Slack: #Prototypes       /\
/___________________________/ /
\___________________________\/
 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \

```
# Prototypes
## 🍒 Captain: @b
Welcome to #prototypes.  Where the project hardware meets the software 🤝, projects
enter at the business development stage and exit at the product launch stage. 

This is the common documentation and library across products, 
as well as the maintainer "record keeper" of organizational document, testing 
safety and #compliance. 😉

The goal in #prototypes should be to harmonize the mechanical, electrical, and software 
as it relates to effective placement of sensor instruments; so that it's obvious what 
the hardware is doing; better internal diagnostic tools and more reliable signal; 
error handling and logging, etc.  Data transfer formats and protocol definitions.

THE #PROTOCOL COMMANDMENTS .. THOU SHALL.
* mark the input power on the board; and put a GREEN LED on the DC side;
* avoid proprietary connectors; and label all pins. 

🍰 -- what is the best way to attach a 0302 LED to a GPIO port? 

### Google Drive
(not much here, mostly use GIT)
https://drive.google.com/drive/u/0/folders/12v2xXv4zwaIGpdFRkwWhQXzTNYlcH7KN



## 🍰 Crew:
 @colin & @tim from San Diego #touit
 @pietro  #troublemakers

## 🎈 Ballast; 
@charles  Bali
@igor  


## Architecture
Website
** Static site, hosted on S3 bucket
** AWS Code Commit // GIThub Repo
** Single Page App

## This repo Javascript NPM & "C" libraries
** Shared across ALL PROJECTS as ~/c0re
** S3 Hosted, Cloudfront CDN Fixed URLs 
** AWS Code Commit // GIT Repo 
** EIMJIP Audio Library


# Active Projects
## GrowPotBot
[_GrowBot] Part of GrowPotBot an Aeroponic Farming Appliance. #growbot (and #growpot) on slack. 
[_Spinavision] A holographic projector
##
##

# README: Welcome to #Prototypes
All projects must be documented in the appropriate channels. 
This will be a big channel with a lot of people.
This channel deals mostly with the hardware and software interface(s); and electronics in general (even those unrelated to EV projects).

# Processors 
* Esp32
* STM32F103

# Important Software
* Platform.io Visual Studio Code [installev.md]
* Espressif Toolchain 
* EasyEDA  (open source PCB designer)

## Items for discussion:
* How do we share files? -- wikifactory or GIT. 

## Marketing and Presentation Guidelines
The EV Effective Sales system 
💀#Pretty !compliance .svg preferred or equivalent open file format must be possible for all submitted projects into the toolchain. 

### Website/App Backend can convert() supported file formats (to SVG):
-s, --svg, -b svg, --backend svg
SVG backend. The output is a Scalable Vector Graphics (SVG) file. This is a single-page, variable-sized, dimension-based backend. 
Note that unless the -r option is given, the resolution of the input bitmap is assumed to be 72dpi.

-b pdf, --backend pdf
PDF backend. The output is a file in the Portable Document Format. If the input consists of multiple bitmaps, 
they are each rendered on a separate page. This is a multi-page, variable-sized, dimension-based backend.

-b pdfpage, --backend pdfpage
The PDFPage backend is like the PDF backend, except that it is fixed-size like the PostScript backend.

-e, --eps, -b eps, --backend eps
EPS backend (default). The output is an encapsulated PostScript file. This is a single-page, variable-sized, dimension-based backend.

-p, --postscript, -b ps, --backend ps
PostScript backend. The output is a PostScript file. This is a multi-page, fixed-size, dimension-based backend. If the input consists of multiple bitmaps, they are each rendered on a separate page.

-b dxf, --backend dxf
DXF backend. The output is a file in the Drawing Interchange Format (DXF). In this backend, all Bezier curves are approximated by piecewise circular arcs; this is suitable for processing in CAD software or for machining applications using CNC tools. This is a single-page, variable-sized, pixel-based backend. The -u option has no effect for this backend.

-b geojson, --backend geojson
GeoJSON backend. The output is a file in the format used by some applications processing geographical data. In this backend, all Bezier curves are approximated by 8 straight line segments. This is a single-page, variable-sized, pixel-based backend. The -u option has no effect for this backend.

-g, --pgm, -b pgm, --backend pgm
PGM backend. The output is a portable greymap (PGM) file. It is a convenient backend for antialiasing a bitmap image. This is a multi-page, variable-sized, pixel-based backend. If the input consists of more than one image, the images are concatenated in the output.

-b gimppath, --backend gimppath
Gimppath backend. This backend produces output suitable to be imported as a path by the GNU Image Manipulation Program (Gimp) (in the Layers, Channels & Paths dialog, select Paths, then right-click and select Import Path). The output is actually an SVG file. The differences to the SVG backend are: the --opaque option has no effect, the --flat option is always on, and the dimensions are pixel-based. This is a single-page, variable-sized, pixel-based backend.

-b xfig, --backend xfig
XFig backend.
