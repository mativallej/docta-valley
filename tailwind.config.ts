import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  prefix: '',
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		transitionProperty: {
  			height: 'height',
  			spacing: 'margin, padding',
  			'transform-padding-shadow': 'transform, padding, box-shadow'
  		},
  		height: {
  			project: '128px'
  		},
  		blur: {
  			xs: '0.8px'
  		},
  		colors: {
  			background: 'var(--bg)',
  			foreground: 'var(--fg)',
  			surface: {
  				DEFAULT: 'var(--surface)',
  				elevated: 'var(--surface-elevated)',
  				border: 'var(--surface-border)',
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				muted: 'var(--primary-muted)',
  				faint: 'var(--primary-faint)',
  				foreground: 'var(--bg)',
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				bright: 'var(--accent-bright)',
  				foreground: 'var(--primary)',
  			},
  			forest: {
  				DEFAULT: 'var(--secondary)',
  				deep: 'var(--deep)',
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--fg)',
  			},
  			fg: {
  				DEFAULT: 'var(--fg)',
  				muted: 'var(--fg-muted)',
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--fg-muted)',
  				fg: 'var(--muted-fg)',
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-fg)',
  			},
  			success: {
  				DEFAULT: 'var(--success)',
  				foreground: 'var(--success-fg)',
  			},
  			warning: {
  				DEFAULT: 'var(--warning)',
  				foreground: 'var(--warning-fg)',
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)',
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)',
  			},
  		},
  		fontFamily: {
  			mono: ['var(--font-display)', 'Courier New', 'monospace'],
  			sans: ['var(--font-body)', 'sans-serif'],
  		},
  		borderRadius: {
  			lg: 'var(--radius-lg)',
  			md: 'var(--radius-md)',
  			sm: 'var(--radius-sm)',
  			DEFAULT: 'var(--radius)',
  		},
  		keyframes: {
  			scaleUpDown: {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'click-animation': {
  				'0%, 100%': {
  					transform: 'scale(1.5) translateY(-10px)'
  				},
  				'50%': {
  					transform: 'scale(1.5) translateY(-35px)'
  				}
  			}
  		},
  		animation: {
  			scaleUpDown: 'scaleUpDown 2s infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			click: 'click-animation 0.8s ease'
  		}
  	}
  },
  variants: {
    extend: {
      translate: ['hover', 'focus'],
    }
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
