from bs4 import BeautifulSoup
import requests

def find_li_tags(soup):
    ancestorTag = soup.find('div', class_="entry-content")
    first_ul_tag = ancestorTag.find('ul')
    li_tags = first_ul_tag.find_all('li')
    return li_tags

def print_codes(li_tags):
    number_of_codes = 0
    for li_tag in li_tags:
        number_of_codes += 1
    print(f'There are {number_of_codes} new Honkai Star Rail codes avaliable:\n')
    for li_tag in li_tags:
        print(li_tag.text)
    print(f'\nRedeem the codes here: https://hsr.hoyoverse.com/gift')

def main():
    url = "https://www.pockettactics.com/genshin-impact/codes"
    status = requests.get(url)
    soup = BeautifulSoup(status.text, 'html.parser')

    li_tags = find_li_tags(soup)
    print_codes(li_tags)

if __name__ == "__main__":
    main()