# R for Data Science

<!-- badges: start -->


<!-- badges: end -->

This repository contains the source of Dan Villarreal's fork of [_R for Data Science_](http://github.djvill.io/r4ds) (2nd ed.), originally written by Hadley Wickham, Mine Çetinkaya-Rundel, and Garrett Grolemund (https://r4ds.hadley.nz/), and lightly modified for the purpose of Dan's Data Science in Linguistics class at the University of Pittsburgh.
The book is built using [Quarto](https://quarto.org/).

## Images

### Omnigraffle drawings

-   Font: 12pt Guardian Sans Condensed / Ubuntu mono

-   Export as 300 dpi png.

-   Website font is 18 px = 13.5 pt, so scale dpi to match font sizes: 270 = 300 \* 12 / 13.5.
    (I also verified this empirically by screenshotting.)

    ``` r
    #| echo: FALSE
    #| out.width: NULL
    knitr::include_graphics("diagrams/transform.png", dpi = 270)
    ```

### Screenshots

-   Make sure you're using a light theme.
    For small interface elements (eg. toolbars), zoom in twice.

-   Screenshot with Cmd + Shift + 4.

-   Don't need to set dpi:

    ``` r
    #| echo: FALSE
    #| out.width: NULL
    knitr::include_graphics("screenshots/rstudio-wg.png")
    ```

### O'Reilly

To generate book for O'Reilly, build the book then:

```{r}
# pak::pak("hadley/htmlbook")
htmlbook::convert_book()

html <- list.files("oreilly", pattern = "[.]html$", full.names = TRUE)
file.copy(html, "../r-for-data-science-2e/", overwrite = TRUE)

pngs <- list.files("oreilly", pattern = "[.]png$", full.names = TRUE, recursive = TRUE)
dest <- gsub("oreilly", "../r-for-data-science-2e/", pngs)
fs::dir_create(unique(dirname(dest)))
file.copy(pngs, dest, overwrite = TRUE)
```

Then commit and push to atlas.

## Code of Conduct

Please note that r4ds uses a [Contributor Code of Conduct](https://contributor-covenant.org/version/2/0/CODE_OF_CONDUCT.html).
By contributing to this book, you agree to abide by its terms.
