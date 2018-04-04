# SingStore List Manager

## Installation

### Backend

In the `list_manager` package there's a `config.example.py`. Make a copy of it and rename it to `config.py`.

To install dependencies run `install.sh`:

```
$ sh install.sh
```

To start a `venv` environment run `activate.sh`:

```
$ source activate.sh
```

To scrape data run `scrape_data.sh`:

```
$ sh scrape_data.sh
```

To add the scraped data run `insert_into_db.py` from the package `list_manager.db`:

```
$ python3 insert_into_db.py
```

To start the application in debug mode run `debug.sh`:

```
$ sh debug.sh
```

#### Dependencies
- Python 3.6
- PostgreSQL
