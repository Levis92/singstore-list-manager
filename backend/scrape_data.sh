#!/usr/bin/env sh

(cd list_manager/singstore && scrapy crawl songs -o songs.json)