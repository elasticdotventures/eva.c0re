# Coda.io Notes
email: support@coda.io
ceo: 

# tracking issues:
* cut and paste doesn't work
* developer library for nodejs not yet operational
* limited security permission

# advanced wizardry
https://community.coda.io/t/countdown-timer-with-action-in-the-end/9029

This is awesome. You can use _Noop()._Delay(ms) as “sleep” to make the code more elegant.

RunActions(
  ModifyRows([Timer vars], [Fire at], Now() + Seconds([Countdown seconds])),
  _Noop()._Delay([Countdown seconds] * 1000),
  ModifyRows([Timer vars], [Fire at], ""),
  OpenWindow("https://www.youtube.com/watch?v=bjxf-eQWKoo")
)


