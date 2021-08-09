bold=$(tput bold)
normal=$(tput sgr0)
magenta=$(tput setaf 6)
green=$(tput setaf 2)
printf "\033c"

# Move into the svg folder
cd ./src/components/Icon/icons/svg

# Remove existing file and recreate it
rm -f ../index.ts
touch index.ts

# Start the icon list in index.ts
echo 'export default [' >> index.ts

# Loop over SVGs and create a VUE file for it
for FILE in *.svg;
  do
  [ -f "$FILE" ] || continue
  # Create a filename var
  filename="${FILE%%.*}"
  
  # Remove existing file and recreate it
  rm -f $filename.vue 
  touch $filename.vue

  # Add an opening template tag
  echo '<template>' >> $filename.vue

  # Append the SVG contents into the new VUE file
  cat $FILE >> $filename.vue

  # Remove the 2nd line of the file (the xml tag)
  # sed -i.bak 2d $filename.vue

  # Append a closing template tag
  echo '</template>' >> $filename.vue

  # Removeany backup files created
  rm -f $filename.vue.bak 
  rm -f $filename.vue-E

  # Add the component name to the icon list in index.ts
  echo "  '$filename',"  >> index.ts

  # Move the VUE component up 1 level
  mv $filename.vue ../$filename.vue

  # Output for user in terminal
  echo "${bold}${magenta}$filename.vue ${bold}${green}✓"
done


# Close the icon list in index.ts
echo '];' >> index.ts

# Move index.ts up 1 level
mv index.ts ../index.ts
