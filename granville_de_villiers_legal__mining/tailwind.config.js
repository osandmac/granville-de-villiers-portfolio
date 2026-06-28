module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js", "./components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2C3E50", // slate-800
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#2C3E50", // slate-800
          900: "#0F172A", // slate-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#34495E", // slate-700
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#34495E", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#D4AF37", // yellow-600
          50: "#FEFCE8", // yellow-50
          100: "#FEF3C7", // yellow-100
          200: "#FDE68A", // yellow-200
          300: "#FCD34D", // yellow-300
          400: "#FBBF24", // yellow-400
          500: "#F59E0B", // yellow-500
          600: "#D4AF37", // yellow-600
          700: "#A16207", // yellow-700
          800: "#92400E", // yellow-800
          900: "#78350F", // yellow-900
        },
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: "#F8F9FA", // gray-100
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#5D6D7E", // slate-600
        },
        // Status Colors
        success: {
          DEFAULT: "#27AE60", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          200: "#BBF7D0", // green-200
          300: "#86EFAC", // green-300
          400: "#4ADE80", // green-400
          500: "#22C55E", // green-500
          600: "#27AE60", // green-600
          700: "#15803D", // green-700
          800: "#166534", // green-800
          900: "#14532D", // green-900
        },
        warning: {
          DEFAULT: "#F39C12", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F39C12", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        error: {
          DEFAULT: "#E74C3C", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#E74C3C", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          accent: "#D4AF37", // yellow-600
        },
      },
      fontFamily: {
        headline: ['Montserrat', 'sans-serif'],
        body: ['Crimson Text', 'serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Inter', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Crimson Text', 'serif'],
        mono: ['Inter', 'monospace'],
      },
      fontWeight: {
        'headline-normal': '400',
        'headline-semibold': '600',
        'headline-bold': '700',
        'body-normal': '400',
        'body-semibold': '600',
        'cta': '600',
        'accent': '500',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'custom-elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderWidth: {
        '1': '1px',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-in-out',
        'slide-down': 'slideDown 300ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}