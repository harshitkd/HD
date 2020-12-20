# -*- coding: utf-8 -*-
"""
Created on Mon Dec 21 01:10:49 2020

@author: Harshit
"""

def get_random_string(length):
    letters = string.ascii_lowercase
    result_str = ''.join(random.sample(letters, length))
    print("Random String is:", result_str)

get_random_string(8)
get_random_string(8)