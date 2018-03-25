# -*- coding: utf-8 -*-

from setuptools import setup, find_packages


setup(
    name='SingStore List Manager',
    version='0.1.4',
    description='',
    author='Anton Levholm',
    packages=find_packages(
        exclude=('tests', 'docs')
    ),
    install_requires=[
        'flask',
        'sqlalchemy',
        'sqlalchemy_utils',
        'psycopg2',
        'scrapy'
    ]
)