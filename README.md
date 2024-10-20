# Iconosquare Event Stream

<p align="center">
  <img align="center" src="https://www.leslivresblancs.fr/sites/default/files/iconosquare-logo.png" style="width: 400px">
</p>

## Description

Iconosquare Event Stream is a React application that simulates a live data stream, refreshing every 2 seconds. The application displays real-time events in both a table and a chart, allowing users to interact with the data through an intuitive interface.

## Features

- **Pause/Play live stream**:  
  A button allows you to **pause** or **resume** the simulated event stream, giving full control over the real-time data updates.
- **Editable table cells**:  
  The table cells are **editable** when clicked, allowing users to modify the values directly in the table.

- **Correct display of modified values**:  
  The modified values are automatically updated in the table to reflect the changes made by the user.

- **Interaction between the chart and table**:  
  Clicking on a point in the chart opens the `value1` cell of the corresponding event in the table, enabling direct editing.

- **Reset modified values**:  
  A button allows you to **reset all modified values** to their original event values.

- **Time navigation**:  
  Components have been added to allow **time navigation** through the event stream, giving precise control over the data displayed.

- **Migration to TypeScript**:  
  The project has been fully migrated to **TypeScript** for improved type management and code robustness.

## Instructions to Run the Project

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (or **yarn**)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zaidoune1/Iconosquare_EventStream.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Iconosquare_EventStream
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the project:

   ```bash
   npm run start
   ```

## How It Works

Once the project is started, a simulated event stream will be generated every 2 seconds and displayed in the table and chart. You will be able to:

- **Pause** or **resume** the stream with the **Pause/Play** button.
- **Edit** the values in the table by clicking on the cells.
- **Interact** with the chart: clicking on a point opens the corresponding cell in the table for editing.
- **Reset** modified values to their initial state using the **Reset** button.
- **Navigate through time** to explore events at different moments.
