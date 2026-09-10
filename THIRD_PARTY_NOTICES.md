# Third-party notices

## Wormhole Extreme

The home demo reuses code and assets from [Wormhole Extreme](https://github.com/rainner/wormhole-extreme) by Rainner Lins ([@raintek_](https://github.com/raintek_)), under the [MIT License](https://github.com/rainner/wormhole-extreme/blob/master/LICENSE).

The complete upstream repository payload is vendored byte-for-byte (excluding `.git/`) at:

- `public/vendor/wormhole-extreme/`

The localized Astro routes `/es` and `/en` embed the project-owned `/wormhole-home.html` shell. That shell reuses the upstream DOM structure and loads the vendored stylesheet, font assets, scene images, and JavaScript from `public/vendor/wormhole-extreme/` through absolute `/vendor/wormhole-extreme/...` paths. It replaces only the visible GitHub Fork control with a project-owned localized legal-document link; it does not claim ownership of the vendored code or assets. Upstream snapshot: commit `26c1ba80bdcdc9565249e21555174c989aa633c4`.

The vendored `dist/js/bundle.min.js` has one Sterling integration adaptation: its render loop continues when the iframe document is not focused, so the initial scene animates before the user clicks the background. All scene objects, assets, controls, and Hyper Travel behavior remain upstream.

The upstream checksum for `dist/js/bundle.min.js` is intentionally not retained after this adaptation; `index.html` remains unchanged.

## Interactive particle title technique

The localized title overlay is an original image-driven Three.js/WebGL GPU adaptation of ideas discussed in [Bruno Imbrizi's Interactive Particles with Three.js](https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/) for Codrops. It samples transparent title-image alpha into GPU points and uses a decaying interaction trail texture. This project does not copy source code from that article, and no MIT license claim is made for Bruno Imbrizi or Codrops.
