#!/bin/bash
export MYSQL_HOME=/apps/mysql
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$MYSQL_HOME/lib
export PATH=$MYSQL_HOME/bin:$MYSQL_HOME/lib:$PATH
