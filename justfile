_default:
  @just --list

build:
  whiskers templates/spyder.tera
  whiskers templates/all.tera
