# Digital Clock

A clean, dynamic digital clock built with Vanilla JavaScript that tracks the user's local system time and updates live every second.

## Live Demo

[Insert Live Demo Link Here]

## Features

- **Real-Time Updates:** The clock updates every second without requiring a page refresh.
- **Accurate Data Formatting:** Single-digit values are strictly zero-padded (e.g., `09:05:03` instead of `9:5:3`).

## Screenshots

![Description](screenshots/Screenshot.png)

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript [cite: 214]

## Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/ifeanyi234/Digital-clock.git>
   cd digital-clock
   ```

## Running Locally

Because this is a Vanilla JavaScript project without build tools, simply open index.html directly in any modern web browser.

## Known Limitations

- The clock reflects the user's local system time only and does not currently support multiple or custom timezones.
- The clock uses a fixed layout and does not currently include advanced 3D or rolling-odometer CSS animations.

## What I'd Improve With More Time

- **Format Toggle:** Add a button to toggle between 12-hour and 24-hour formats.
- **Date Display:** Display the current date alongside the active time.
- **Advanced Animations:** Isolate each digit into its own hidden overflow container to build a mechanical, rolling-odometer transition effect using CSS transform: translateY.
