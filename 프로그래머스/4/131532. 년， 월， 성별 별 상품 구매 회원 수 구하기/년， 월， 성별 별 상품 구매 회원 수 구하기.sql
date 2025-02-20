SELECT date_format(DATE, "%Y") as YEAR, extract(month from DATE) as MONTH, GENDER, count(distinct USERS)
from (select o.user_id as USERS, o.sales_date as DATE, u.gender as GENDER
      from online_sale as o left outer join user_info as u
     on o.user_id = u.user_id
     where u.gender is not null)  as info
group by gender, month
order by YEAR asc, MONTH asc, GENDER asc