DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (   
	`id`	VARCHAR(36)	NOT NULL PRIMARY KEY COMMENT 'PK',
	`name`	VARCHAR(100) NOT NULL COMMENT '상품명',
	`price`	INT	NOT NULL COMMENT '가격',
	`stock`	INT	NOT NULL COMMENT '재고 수량',
	`created_at` TIMESTAMP NOT NULL	DEFAULT current_timestamp COMMENT '등록일자'
) COMMENT '상품';


