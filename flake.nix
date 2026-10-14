{
  description = "templebar admin";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-26.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {
          inherit system;
        };
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            oxfmt
            oxlint
            chromium
          ];

          CHROMIUM_PATH = "${pkgs.chromium}/bin/chromium";
          PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "1";
        };
      }
    );
}
