basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    false,
    false,
    true
    )
    dht11_dht22.selectTempType(tempType.celsius)
    basic.showString("Temp:")
    basic.showNumber(dht11_dht22.readData(dataType.temperature))
    basic.showString("Umi:")
    basic.showNumber(dht11_dht22.readData(dataType.humidity))
})
