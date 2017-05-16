function render(data){
			folder.innerHTML = '';
			files.innerHTML = '';
			data.forEach(function(ele){
				//创建li
				var lis = document.createElement('li');
				//创建li下的div(用来包文字的)
				var divs = document.createElement('div');
				//创建li下的i标签(模拟checkbox)
				var checkbox = document.createElement('i');
				//创建li下面的h4标签
				var h4s = document.createElement('h4');
				//创建hover背景层
				var mask = document.createElement('p');
				//添加input用来重命名
				var inputs = document.createElement('input');
				//把文件添加到页面上 以类名判断添加到哪个ul里面
				if(ele.type=='folder'){
					lis.style.backgroundImage = 'url('+ele.ico+')';
					divs.innerHTML = ele.name;
					lis.appendChild(divs);
					lis.appendChild(inputs);
					lis.appendChild(checkbox);
					lis.appendChild(mask);
					folder.appendChild(lis);
				}else{
					h4s.innerHTML = ele.name;
					lis.style.backgroundImage = 'url('+ele.ico+')';
					lis.appendChild(divs);
					lis.appendChild(inputs);
					lis.appendChild(checkbox);
					lis.appendChild(h4s);
					lis.appendChild(mask);
					files.appendChild(lis);
				}
			//双击进入下一层
			if(ele.type == 'folder'){
				lis.onclick = function(){
					list.push(data);
					arr = ele.child
					// console.log(ele);
					render(ele.child);
					num=0;
					editbox.style.display = 'none';
					gouxuan();
					allchecked.className = '';
				};
			}
				//添加面包屑导航跳转
//				for(var i=0;i<lighting.length;i++){
//					lighting[i].onclick = function(){
//						folder.innerHTML = '';
//						files.innerHTML = '';
//						renderfile();
//						function renderfile(list){
//							data.forEach(function(ele){
//								//创建li
//								var lis = document.createElement('li');
//								//创建li下的div(用来包文字的)
//								var divs = document.createElement('div');
//								//创建li下的i标签(模拟checkbox)
//								var checkbox = document.createElement('i');
//								//创建li下面的h4标签
//								var h4s = document.createElement('h4');
//								//把文件添加到页面上 以类名判断添加到哪个ul里面
//								if(ele.type=='folder'){
//									lis.style.backgroundImage = 'url('+ele.ico+')';
//									divs.innerHTML = ele.name;
//									lis.appendChild(divs);
//									lis.appendChild(checkbox);
//									lis.appendChild(mask);
//									folder.appendChild(lis);
//								}else{
//									h4s.innerHTML = ele.name;
//									lis.style.backgroundImage = 'url('+ele.ico+')';
//									lis.appendChild(divs);
//									lis.appendChild(checkbox);
//									lis.appendChild(h4s);
//									lis.appendChild(mask);
//									files.appendChild(lis);
//								}
//								gouxuan();
//								
//							});
//							var rightfiles = orderway.getElementsByTagName('li');
//							console.log(rightfiles);
//							for(var i=0;i<rightfiles.length;i++){
//								console.log(1);
//							}
//							enter();
//						}
//					};
//				}
			});
		}