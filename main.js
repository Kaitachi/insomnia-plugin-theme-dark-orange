module.exports.themes = [{
    name: 'dark-orange', // theme in kebab-case
    displayName: 'Dark Orange', // formatted theme name
    theme: {
        // Background, foreground, and highlight values nested directly in the theme
        // object will serve as the default overwrites for all properties you add.
        background: {
            default:    'hsl(215,  15%,  15%)',  // primary background color
            surprise:   'hsl( 25, 100%,  45%)',  // GET request & accents (Dashboard link, SEND button, branch button, add plugin button)
            success:    'hsl(115,  85%,  30%)',  // POST request, 200 OK, parameter names
            warning:    'hsl(280, 100%,  70%)',  // PUT request
            notice:     'hsl(225,  95%,  60%)',  // PATCH request
            danger:     'hsl( 10, 100%,  55%)',  // DELETE request
            info:       'hsl(  0,   0%,  70%)'   // OPTIONS AND HEAD request
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
                    default:    'hsl( 24, 100%,  35%)', // sidebar background
                    surprise:   'hsl( 25, 100%,  60%)',  // GET request & accents (Dashboard link, SEND button, branch button, add plugin button)
                    success:    'hsl(115,  70%,  40%)',  // POST request, 200 OK, parameter names
                    warning:    'hsl(280, 100%,  40%)',  // PUT request
                    notice:     'hsl(225,  95%,  50%)',  // PATCH request
                    danger:     'hsl( 10, 100%,  33%)',  // DELETE request
                    info:       'hsl(  0,   0%,  50%)'   // OPTIONS AND HEAD request
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
            /* Response Pane > Timeline Tab > Comments */
            .editor .CodeMirror .cm-curl-comment {
                color: hsl(202, 7%, 68%);
            }

            /* gRPC Requests */
            header .method-grpc {
                color: hsl(180, 85%, 50%) !important;
            }
            
            .sidebar .method-grpc {
                color: hsl(180, 85%, 50%) !important;
            }
            
            .fa.fa-exclamation-triangle.notice,
            button span.warning {
                color: hsl( 10, 100%,  35%) !important;
            }
        `
    }
}];
