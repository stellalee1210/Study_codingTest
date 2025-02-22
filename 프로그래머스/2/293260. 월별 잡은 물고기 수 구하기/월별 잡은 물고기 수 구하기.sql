select count(id) as fish_count, extract(month from time) as month
from fish_info
group by extract(month from time)
order by month