module.exports.themes = [{
    name: 'dark-orange', // theme in kebab-case
    displayName: 'Dark Orange', // formatted theme name
    theme: {
        // Background, foreground, and highlight values nested directly in the theme
        // object will serve as the default overwrites for all properties you add.
        background: {
            default:    'hsl(215,  15%,  15%)',  // primary background color
            success:    'hsl(115,  82%,  29%)',  // POST request, 200 OK, parameter names
            notice:     'hsl(215,  82%,  48%)',  // PATCH request
            warning:    'hsl(279,  98%,  52%)',  // PUT request
            danger:     'hsl(  6,  99%,  52%)',  // DELETE request
            surprise:   'hsl( 24, 100%,  50%)',  // accent (Dashboard link, GET request, SEND button, branch button, add plugin button)
            info:       'hsl(202,   7%,  68%)'   // OPTIONS AND HEAD request
        },
        foreground: {
            default:    'hsl(  0,   0%, 100%)',    // primary font color
        },
        highlight: {
            default:    'hsl( 24, 100%,  40%)'      // highlight color
        },
        // The styles object targets sub-components of the Insomnia application.
        styles: {
            sidebar: {
                background: {
                    default:    'hsl( 24, 100%,  25%)' // sidebar background
                },
                highlight: {
                    default:    'hsl(225,   6%,  75%)', // selected sidebar item
                    xxs:        'hsla(0, 0%, 78%, 0.05)',
                    xs:         'hsla(0, 0%, 78%, 0.2)',
                    sm:         'hsla(0, 0%, 78%, 0.4)',
                    md:         'hsla(0, 0%, 78%, 0.5)',
                    lg:         'hsla(0, 0%, 78%, 0.6)',
                    xl:         'hsla(0, 0%, 78%, 0.7)',
                }
            },
            paneHeader: {
                background: {
                    default:    'hsl(215,  15%,  10%)' // address bar
                }
            },
            dialog: {
                background: {
                    default:    'hsl(214, 16%, 17%)' // modal primary background color
                }
            }
        },
        rawCss: `
            .editor .CodeMirror .cm-curl-comment { // Comment sections for Timeline
                color: hsl(202, 7%, 68%);
            }
        `
    }
}];
