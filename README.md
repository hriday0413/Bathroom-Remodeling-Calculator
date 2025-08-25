# Bathroom Remodeling Calculator

## Project Overview
A comprehensive web-based calculator designed for All Access LLC to streamline the material estimation process for bathroom remodeling projects. This tool helps contractors and project managers quickly generate accurate material lists based on specific bathroom dimensions and renovation requirements.

## Live Demo
🔗 **[View Live Application](https://app.netlify.com/teams/hriday0413/projects)**

## Features

### Core Functionality
- **Multi-step Form Interface**: 12-step guided process for comprehensive data collection
- **Dynamic Calculations**: Real-time material quantity calculations based on user inputs
- **Area-based Estimations**: Automatic calculation for:
  - Framing requirements
  - Drywall and wallboard coverage
  - Flooring and tile needs
  - Paint coverage
  - Insulation requirements

### Key Components
- **Dimensional Analysis**: Supports both original and modified bathroom dimensions
- **Shower Configuration**: Custom shower base dimensions and wall specifications
- **Accessibility Features**: ADA-compliant options including grab bars and door modifications
- **Electrical Planning**: Automated electrical component requirements based on home configuration
- **Demolition Tracking**: Removal and disposal calculations for existing materials

## Technology Stack
- **Frontend**: React 17 (CDN version)
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **Architecture**: Single-page application (SPA)

## Installation & Setup

### Local Development
1. Clone the repository:
```bash
git clone [repository-url]
cd bathroom-calculator
```

2. Open `index.html` in a web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Navigate to `http://localhost:8000` in your browser

### Deployment
The application is configured for automatic deployment via Netlify. Simply push changes to the main branch to trigger a new deployment.

## Usage Guide

1. **Start**: Enter original bathroom dimensions
2. **Modifications**: Specify any dimensional changes
3. **Framing**: Configure wall extensions if needed
4. **Shower Setup**: Define shower base and wall specifications
5. **Fixtures**: Select toilet, vanity, and grab bar options
6. **Demolition**: Specify items to be removed
7. **Electrical**: Review automatic electrical requirements
8. **Calculate**: Generate comprehensive materials list

## Project Structure
```
bathroom-calculator/
│
├── index.html          # Main application file
├── README.md          # Project documentation
└── .gitignore         # Git ignore configuration
```

## Key Calculations

### Material Formulas
- **Drywall Area**: `(2 × (length + width)) × height - shower_wall_area - window_area`
- **Ceramic Tile**: `floor_area - shower_base_area`
- **Baseboard**: `perimeter - shower_base_perimeter`
- **Paint Coverage**: `drywall_area + wallboard_area`

## Future Enhancements
- [ ] Cost estimation integration
- [ ] PDF export functionality
- [ ] Material supplier database integration
- [ ] Mobile-responsive improvements
- [ ] Save/load project configurations
- [ ] Multi-language support

## Author
Hriday Shankar
Northeastern University
Contact me: shankar.hr@northeastern.edu
