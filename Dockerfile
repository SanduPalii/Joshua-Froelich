# Joshua Froelich - Static Website
# Uses nginx to serve HTML/CSS/JS assets
FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy project files to nginx web root
COPY . /usr/share/nginx/html/

# Copy custom nginx config (optional overrides)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
