
echo "Dropping tables..."
npx sequelize-cli db:migrate:undo:all

echo "Running migrations..."
npx sequelize-cli db:migrate

echo "Running seeders..."
npx sequelize-cli db:seed:all

echo "Starting the application..."
npm start


echo "finish..."
