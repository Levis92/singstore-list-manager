#!/usr/bin/env sh

(cd singstore_list_manager/singstore && scrapy crawl songs -o songs.json)