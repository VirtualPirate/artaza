---
title: Compile C++ to wasm using CMake
date: October 10, 2022
description:
  As you know useEffect is used in React Components for running code on
  state changes on states and componenet reloads. But, useEffect()
  functionis asynchronous which poses problems in some particular
  situations. But, useLayoutEffect() works like class components life
  cycle methods which has advantages

tags:
  - web
  - c++
  - wasm
cover_image: ./graphics/cmake_wasm.png
---

# Introduction

In this article, we will talk about, how to setup a **CMake** to compile a C++ project to **WebAssembly (.wasm).**

## Installation Prerequisite

- Emscripten [(Click here)](https://emscripten.org/docs/getting_started/downloads.html)
- CMake [(Click here)](https://cmake.org/download/)

## File Structure

- 📂build
- 📂cpp
- 📂generated

## Creating C++ file

```c++
// cpp/main.cpp

extern "C" {
	char* greet(){
		return "Hello ";
	}
}

```

## Creating the `CMakeLists.txt` file

```python
project(Wasm) # PROJECT NAME
cmake_minimum_required(VERSION 3.16.3)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/../generated")
set(EXPORTED_FUNCTIONS "'[_greet]'") # Putting the greet function we want to export
set(CMAKE_EXECUTABLE_SUFFIX ".js")
set(CMAKE_BUILD_RPATH "/build")
set(CMAKE_CXX_STANDARD 17)

include_directories(include)
file(GLOB SOURCES src/*.cpp)
add_executable(compiled ${SOURCES})

set_target_properties(compiled PROPERTIES LINK_FLAGS "-O3 -s WASM=0 -s EXPORTED_FUNCTIONS=${EXPORTED_FUNCTIONS}")
```
