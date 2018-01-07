# Cordova starting
## Java Development Kit
Create folder to host JDK
```bash
cd /usr/local
sudo mkdir java && cd java
sudo tar xzvf ~/Downloads/jdk-*****_***.tar.gz
# replace *** with the correct number that matches your directory path
```

In order to have JAVA in path we have to add it to .bashrc file

```bash
cd ~
vim .bashrc
```

```bash
export JAVA_HOME="/usr/local/java/jdk1.8.0_***"
PATH=$PATH:$JAVA_HOME/bin
```

```bash
source .bashrc
javac -version 
```
it should print the version of JAVA you have

source is a bash shell built-in command that executes the content of the file passed as argument, in the current shell. It has a synonym in . (period).

## Android Studio

Download from their website

```bash
cd /usr/local
sudo unzip ~/Downloads/android-studio-ide-***.zip
cd android-studio/bin
./studio.sh
```

Now we should add Android to the path
```bash
cd ~
vim .bashrc
```

```bash
export ANDROID_HOME="$HOME/Android/Sdk"
PATH=$PATH:$ANDROID_HOME/tools
PATH=$PATH:$ANDROID_HOME/platform-tools
```

## Gradle

Install Gradle

```bash
sudo apt install gradle
```

## Cordova

```bash
npm install -g cordova
```

Now we have everything we need, we can create the project

## Create Cordova Project

```bash
cordova create myproject
cd myproject
```

## Run the project

If you want to test it in the browser:
```bash
cordova platform add browser
cordova run browser
```

If you want to run it with Android you should add the platform:

```bash
cordova platform add android
```
Then conect your android device with developer mode active or use an emulator from Android Studio and run:

```bash
cordova run browser
```

### Check if everything is OK

```bash
cordova requirements
```


