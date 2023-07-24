const date = new Date()

let year=date.getFullYear(),
month = date.getMonth(),
day=date.getDate(),
hour=date.getHours(),
minute = date.getMinutes(),
seconde=date.getSeconds()
dayNumber = date.getDay()

let months=[
    'Ocak',
    'şubat',
    'mart',
    'nisan',
    'mayıs',
    'haziran',
    'temmuz',
    'ağustos',
    'eylül',
    'ekim',
    'kasım',
    'aralık'
]

let days=[
    'pazartesi',
    'salı',
    'çarşamba',
    'perşembe',
    'cuma'
]

let humanReadableDate= '${day} ${months[month] ${year},${days[dayNumber]}},${hour}:${minute}:${second}'
console.log(humanReadableDate)