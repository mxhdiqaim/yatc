# Yet Another Tailwind To CSS (Y-A-T-C)

Convert Tailwind class to Vanilla CSS (Others styles option on the way).

## Use Case

This tool helps developers understand the underlying CSS properties of Tailwind utility classes and assists in migrating from Tailwind to vanilla CSS when needed.

## Features

- Convert Tailwind utility classes to vanilla CSS
- Support for common Tailwind utilities including:
  - Layout (display, position, etc.)
  - Flexbox and Grid
  - Spacing (margin, padding)
  - Typography
  - Colors and backgrounds
  <!-- - Handles arbitrary values (e.g., `[width:200px]`) -->
- Responsive design utilities (sm:, md:, lg:, etc.)
- Copy converted CSS with one click
- Warning system for unsupported or unknown classes
- Example button to demonstrate usage

## Project Structure

```
[rootFolder]/
├── src/
│   ├── lib/
│   │   └── tailwind/
│   │       ├── constants/
│   │       │   ├── colors.ts
│   │       │   ├── spacing.ts
│   │       │   └── mediaQueries.ts
│   │       ├── types/
│   │       │   └── index.ts
│   │       ├── utils/
│   │       │   ├── parseArbitraryValue.ts
│   │       │   └── generateUtilities.ts
│   │       ├── mappings/
│   │       │   ├── layout.ts
│   │       │   ├── flexbox.ts
│   │       │   ├── grid.ts
│   │       │   ├── spacing.ts
│   │       │   └── typography.ts
│   │       └── index.ts
│   ├── components/
│   │   └── TailwindConverter/
│   │       ├── ConversionForm.tsx
│   │       ├── ConversionResult.tsx
│   │       └── index.tsx
│   └── app/
│       └── converter/
│           ├── page.tsx
│           └── layout.tsx
├── public/
├── package.json
└── tsconfig.json
```

The application is also available at [here](https://y-a-t-c.vercel.app)

## Development

### Adding New Utilities

To add support for new Tailwind utilities:

1. Create or modify the appropriate mapping file in `src/lib/tailwind/mappings/`
2. Add any necessary constants in `src/lib/tailwind/constants/`
3. Update the types if needed in `src/lib/tailwind/types/`
4. Import and include the new mappings in `src/lib/tailwind/index.ts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Next.js and TypeScript
- Styled using Tailwind CSS
- Inspired by the Tailwind CSS documentation

## Disclaimer

Before I start this project, I didn't there is some similar out there. That comes later after I have put all the hard work. So I decided to continue to the project.
