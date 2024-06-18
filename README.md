### Pizza Delivery Application

This repository contains the source code for a pizza delivery application designed to streamline the process of ordering and delivering pizzas to customers. The application is built using Next JS, TypeScript and Prisma.

## Features

- User Authentication: Users can create accounts, log in, and log out securely.
- Menu Management: Admins can manage the menu by adding, editing, or removing pizzas and other items.
- Order Placement: Users can browse the menu, add items to their cart, and place orders with customizations.
- Real-Time Tracking: Customers can track the status of their orders in real-time, from preparation to delivery.
- Admin Dashboard: Admins have access to a dashboard to view orders, manage deliveries, and track sales.
- Payment Integration: Secure payment gateway integration for online payments.

 ## Technologies Used

- **Next.js:** React framework for server-side rendering and front-end development.
- **React:** Building dynamic and interactive user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for responsive and aesthetic designs.
- **Shadcn UI Library:** Enhancing UI components with modern aesthetics and functionality.
- **Stripe:** Payment gateway for secure and efficient transaction processing.
- **Prisma:** ORM (Object-Relational Mapping) for TypeScript and PostgreSQL, simplifying database interactions.
- **TypeScript:** Adds static typing and scalability to the application codebase.
- **PostgreSQL:** Robust relational database management system for storing application data securely.

## Installation

# Clone the repository:

    git clone "https://github.com/aashirisrar/pizza-app"

# Install dependencies:

    cd pizza-app
    npm install

# Set up environment variables:

Create a .env file in the root directory and add the following variables:

    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    DATABASE_URL="file:dev.db"
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Run the application:

    npm run dev

## Usage

- Visit the application in your web browser at http://localhost:3000.
- If you're a new user, sign up for an account.
- Browse the menu, add items to your cart, and proceed to checkout.
- Track the status of your order in real-time.
- Admins can access the admin dashboard to manage orders and update the menu at [http://localhost:3000/admin](http://localhost:3000/admin).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/improvement).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/improvement).
- Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

Special thanks to the developers of Next Js, TypeScript and Prisma.
