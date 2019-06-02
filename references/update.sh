#!/bin/env sh

rm items* stats*

wget https://www.pathofexile.com/api/trade/data/stats && python -mjson.tool stats > stats.json

wget https://www.pathofexile.com/api/trade/data/items && python -mjson.tool items > items.json
