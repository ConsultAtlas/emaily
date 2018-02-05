function localtunnel {
  lt -s 2frj040yu0i127m --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done