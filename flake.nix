{
  description = "Flake starter";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:NixOS/flake-compat";
      flake = false;
    };
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:
    let
      systems = with flake-utils.lib.system; [
        x86_64-linux
      ];
    in
    flake-utils.lib.eachSystem systems (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells = {
          default = pkgs.mkShell {
            packages = with pkgs; [ deno ];
          };
        };
      }
    );
}
