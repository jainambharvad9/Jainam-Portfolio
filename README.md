# Animated Portfolio

This is a Django-based animated portfolio website designed with a purple glassmorphism aesthetic and dark mode support. The portfolio showcases resume details and a technical profile, providing an interactive experience for visitors.

## Project Structure

```
animated-portfolio
├── portfolio
│   ├── migrations
│   ├── static
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   └── animations.js
│   │   └── images
│   ├── templates
│   │   ├── base.html
│   │   ├── index.html
│   │   ├── resume.html
│   │   ├── profile.html
│   │   └── contact.html
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── animated-portfolio
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
└── README.md
```

## Features

- **Responsive Design**: The website is designed to be responsive and user-friendly across various devices.
- **Dark Mode**: A dark mode option enhances readability and user experience.
- **Animations**: JavaScript animations provide a dynamic feel to the portfolio.
- **Showcase Sections**: Includes sections for resume, technical profile, and contact information.

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd animated-portfolio
   ```

2. **Create a Virtual Environment**:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

4. **Run Migrations**:
   ```
   python manage.py migrate
   ```

5. **Run the Development Server**:
   ```
   python manage.py runserver
   ```

6. **Access the Website**:
   Open your web browser and go to `http://127.0.0.1:8000/`.

## Contributing

Feel free to submit issues or pull requests to improve the portfolio. Contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.