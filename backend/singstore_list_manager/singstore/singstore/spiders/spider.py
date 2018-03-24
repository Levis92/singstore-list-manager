from scrapy import Spider


class SongSpider(Spider):
    name = "songs"
    start_urls = [
        'https://www.singstar.com/en_US/store/by-act.html'
    ]

    def parse(self, response):
        def extract_detail(track, target_element):
            return track.css(target_element).extract_first()
        
        for track in response.css(".track"):
            yield {
                'artist': extract_detail(track, ".track_artist::text"),
                'title': extract_detail(track, ".track_title::text"),
                'cover': extract_detail(track, ".crop img::attr(src)")
            }

        for song_list in response.css(".pagination .next a::attr(href)"):
            yield response.follow(song_list, self.parse)

