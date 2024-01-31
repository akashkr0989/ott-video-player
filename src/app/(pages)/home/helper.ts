// import { useEffect, useState } from 'react';
// import moment from 'moment';

// import { apiEndpoints } from '@/app/constants/api-endpoints';

// const playerHandler = () => {
//   const [playList, setPlayList] = useState([]);

//   const elementIsVisibleInViewport = (el: any, partiallyVisible = false) => {
//     const { top, left, bottom, right } = el.getBoundingClientRect();
//     const { innerHeight, innerWidth } = window;
//     return partiallyVisible
//       ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
//           ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
//       : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
//   };

//   function playVideos(videojsInstance: any) {
//     const players = videojsInstance.getPlayers();
//     const keys = Object.keys(players);
//     keys.forEach((element) => {
//       const vp: any = players[element];
//       if (vp) {
//         if (elementIsVisibleInViewport(vp.el_)) {
//           vp.currentTime(0);
//           vp.userActive(false);
//           setTimeout(() => {
//             vp.play();
//           }, 10);
//         } else {
//           setTimeout(() => {
//             vp.pause();
//           }, 10);
//         }
//       }
//     });
//   }

//   useEffect(() => {
//     let playListArray: any = [];
//     (async () => {
//       const data = new FormData();

//       // Secret keys shouldn't be used directly. Use it from ENV. Its used here due to trial version example.
//       data.append('secret_key', 'dac56d944c724948a48766d6f51e7749');
//       data.append('app_id', '01e71e700e404082b59a704fb7b8277c');
//       const result = await postFormDataApi({ path: apiEndpoints.getToken, data });
//       localStorage.setItem('access_token', result.data.response.access_token || '');
//       localStorage.setItem('app_token', result.data.data.app_token || '');
//       localStorage.setItem('product_key', result.data.data.product_key || '');
//       let content;
//       try {
//         content = await postDataApi({
//           path: apiEndpoints.getContent,
//           data: {
//             query: `{ contentList(app_token:"${localStorage.getItem(
//               'app_token',
//             )}",product_key:"${localStorage.getItem(
//               'product_key',
//             )}", page:1,per_page:10,content_asset_type:"1",sort_by:"otn"){ page_info{total_count} content_list{content_uuid content_name content_desc content_permalink content_search_tag content_category_uuid content_sub_category_uuid content_template_uuid content_parent_uuid content_asset_type content_asset_uuid content_trailer_uuid content_poster_uuid content_banner_uuid content_app_poster_uuid store_key app_token product_key content_user_uuid content_accessibility content_created_date content_updated_date content_trans{ content_trans_uuid content_trans_field_uuid content_trans_field_value content_trans_content_uuid} categories{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date sub_category{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date}} content_created_by content_updated_by content_level tags posters{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} banners{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} content_tvapp_poster_uuid content_mobileapp_poster_uuid content_tvapp_banner_uuid content_mobileapp_banner_uuid app_poster_details{image_uuid file_name file_url}  is_encoded cast_details{cast_uuid cast_name cast_bio cast_image_uuid created_date cast_image_details{image_uuid file_name file_url} app_token product_key store_key cast_type_details{cast_type_uuid cast_type_name} no_image_available_url}  no_image_available_url permalink_type path is_parent no_of_child_content root_parent_uuid video_details{video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}} trailer_details{video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}}  audio_details{audio_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}     } child_content{content_uuid content_name content_desc content_permalink content_search_tag content_category_uuid content_sub_category_uuid content_template_uuid content_parent_uuid content_asset_type content_asset_uuid content_trailer_uuid content_poster_uuid content_banner_uuid content_app_poster_uuid store_key app_token product_key content_user_uuid content_accessibility content_created_date content_updated_date content_trans{ content_trans_uuid content_trans_field_uuid content_trans_field_value content_trans_content_uuid} categories{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date sub_category{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date}} content_created_by content_updated_by content_level tags posters{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} banners{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} content_tvapp_poster_uuid content_mobileapp_poster_uuid content_tvapp_banner_uuid content_mobileapp_banner_uuid app_poster_details{image_uuid file_name file_url}  is_encoded cast_details{cast_uuid cast_name cast_bio cast_image_uuid created_date cast_image_details{image_uuid file_name file_url} app_token product_key store_key cast_type_details{cast_type_uuid cast_type_name} no_image_available_url}  no_image_available_url permalink_type path is_parent no_of_child_content root_parent_uuid video_details{video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}} trailer_details{video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}}  audio_details{audio_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url} encoded_url{resolution url} offline_url{resolution url}     }   }    }}}`,
//           },
//         });
//       } catch (err) {
//         // document.location.reload();
//       }

//       playListArray = [];
//       content.data.data.contentList.content_list.forEach((element: any, index: number) => {
//         if (index === 0) {
//           playListArray.push({
//             name: element?.content_name || '',
//             description: element?.content_desc || '',
//             duration: moment.duration(element?.video_details?.duration).asSeconds() || '',
//             sources: [
//               {
//                 src: element?.video_details?.hls_path || '',
//                 type: 'application/vnd.apple.mpegurl',
//               },
//             ],
//             poster:
//               element?.posters?.website && element.posters.website[0].file_url
//                 ? element?.posters?.website[0]?.file_url
//                 : element?.no_image_available_url,
//             textTracks: [
//               // {
//               //   src: 'https://d2qhubmtkumgh4.cloudfront.net/hi9aiihXTha5mHpGBACQHf1yBHxCQqtk/3D28C83C85544F0D9517DD2E7C7EEDAA/vl/928155a7cdb44233ad126c41550c0db4/subtitle/962b916378e71826b39e75e5692424c4/[English] Wonderful 4K HDR 120FPS Dolby Vision [DownSub.com]-de340c1891fbc6e87467fff8246ef1e9.vtt',
//               //   srclang: 'en',
//               //   label: 'English',
//               //   default: true,
//               // },
//             ],
//             // you can use <picture> syntax to display responsive images
//             thumbnail: [
//               {
//                 srcset:
//                   element?.posters?.website && element.posters.website[0].file_url
//                     ? element?.posters?.website[0]?.file_url
//                     : element?.no_image_available_url,
//                 type: 'image/png',
//                 media: '(min-width: 400px;)',
//               },
//               {
//                 src:
//                   element?.posters?.website && element.posters.website[0].file_url
//                     ? element?.posters?.website[0]?.file_url
//                     : element?.no_image_available_url,
//               },
//             ],
//             contentId: element?.content_uuid,
//           });
//         } else {
//           playListArray.push({
//             name: element?.content_name || '',
//             description: element?.content_desc || '',
//             duration: moment.duration(element?.video_details?.duration).asSeconds() || '',
//             poster:
//               element?.posters?.website && element.posters.website[0].file_url
//                 ? element?.posters?.website[0]?.file_url
//                 : element?.no_image_available_url,
//             // textTracks: [
//             //   {
//             //     src: 'https://d2qhubmtkumgh4.cloudfront.net/hi9aiihXTha5mHpGBACQHf1yBHxCQqtk/3D28C83C85544F0D9517DD2E7C7EEDAA/vl/928155a7cdb44233ad126c41550c0db4/subtitle/962b916378e71826b39e75e5692424c4/[English] Wonderful 4K HDR 120FPS Dolby Vision [DownSub.com]-de340c1891fbc6e87467fff8246ef1e9.vtt',
//             //     srclang: 'en',
//             //     label: 'English',
//             //     default: true,
//             //   },
//             // ],
//             sources: [
//               {
//                 src: element?.video_details?.hls_path || '',
//                 type: 'application/vnd.apple.mpegurl',
//               },
//               { src: element?.video_details?.mpeg_path || '', type: 'video/mp4' },
//             ],

//             // you can use <picture> syntax to display responsive images
//             thumbnail: [
//               {
//                 srcset:
//                   element?.posters?.website && element.posters.website[0].file_url
//                     ? element?.posters?.website[0]?.file_url
//                     : element?.no_image_available_url,
//                 type: 'image/png',
//                 media: '(min-width: 400px;)',
//               },
//               {
//                 src:
//                   element?.posters?.website && element.posters.website[0].file_url
//                     ? element?.posters?.website[0]?.file_url
//                     : element?.no_image_available_url,
//               },
//             ],
//             contentId: element?.content_uuid,
//           });
//         }
//       });
//       setPlayList(playListArray);
//     })();
//   }, []);

//   const handlePlayerReady = (player: any, videojsInstance: any) => {
//     console.log(videojsInstance);
//     player.on('play', () => {
//       player.muted(false);
//     });
//     player.on('timeupdate', () => {
//       // localStorage.setItem(
//       //   'currentMediaId',
//       //   player.playlist()[player.playlist.currentItem()].contentId,
//       // );
//       // if (Number(player.currentTime) !== 0) {
//       //   localStorage.setItem('currentTime', player.currentTime());
//       // } else {
//       //   localStorage.removeItem('currentTime');
//       // }
//     });
//   };
//   const handleReelPlayerReady = (player: any, videojsInstance?: any) => {
//     player.el().addEventListener(
//       'scrollend',
//       () => {
//         playVideos(videojsInstance);
//       },
//       false,
//     );
//     player.pause();
//     player.on('play', () => {
//       player.muted(false);
//     });
//     player.on('timeupdate', () => {
//       // localStorage.setItem(
//       //   'currentMediaId',
//       //   player.playlist()[player.playlist.currentItem()].contentId,
//       // );
//       // if (Number(player.currentTime) !== 0) {
//       //   localStorage.setItem('currentTime', player.currentTime());
//       // } else {
//       //   localStorage.removeItem('currentTime');
//       // }
//     });
//   };

//   const handleFirstReelPlayerReady = (player: any, videojsInstance?: any) => {
//     const el: any = document.getElementsByClassName('scroll-container');
//     el[0].addEventListener(
//       'scrollend',
//       () => {
//         playVideos(videojsInstance);
//       },
//       false,
//     );

//     player.play();
//     player.on('play', () => {
//       player.muted(false);
//     });
//     player.on('timeupdate', () => {
//       // localStorage.setItem(
//       //   'currentMediaId',
//       //   player.playlist()[player.playlist.currentItem()].contentId,
//       // );
//       // if (Number(player.currentTime) !== 0) {
//       //   localStorage.setItem('currentTime', player.currentTime());
//       // } else {
//       //   localStorage.removeItem('currentTime');
//       // }
//     });
//   };
//   return {
//     playList,
//     handlePlayerReady,
//     handleReelPlayerReady,
//     handleFirstReelPlayerReady,
//   };
// };

// export default playerHandler;
