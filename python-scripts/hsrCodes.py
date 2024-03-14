import requests
from bs4 import BeautifulSoup

def find_ul_tags(soup):
    target_tag = soup.find('div', class_='entry-content')
    target_ul = target_tag.find_all('ul')
    return target_ul

def print_codes(target_ul):
    number_of_codes = 0
    for li_tag in target_ul[0].find_all('li'):
        number_of_codes += 1
    print(f'There are {number_of_codes} new codes avaliable:\n')
    for li_tag in target_ul[0].find_all('li'):
        print(li_tag.text)
    print(f'\nRedeem the codes here: https://hsr.hoyoverse.com/gift')

def main():
    url = 'https://www.pockettactics.com/honkai-star-rail/codes'
    status = requests.get(url)
    soup = BeautifulSoup(status.text, 'html.parser')

    all_target_uls = find_ul_tags(soup)
    print_codes(all_target_uls)

if __name__ == "__main__":
    main()
