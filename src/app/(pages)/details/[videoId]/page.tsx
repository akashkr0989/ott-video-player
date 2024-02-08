"use client";
import { apiEndpoints } from "@/app/constants/api-endpoints";
import httpService from "@/app/services/http.service";
import VideoDetailsPage from "@/app/shared/components/video-details/page";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import playerHandler from "./helper";

const Details: React.FC = () => {
  const params = useParams();
  const options = useSelector((state: any) => state.option);
  let { playList, handlePlayerReady } = playerHandler();

  console.log(playList);

  playList.map((elment: any) => {
    
  });

  // useEffect(() => {
  //   let content: any;
  //     try {
  //       content = httpService.post(apiEndpoints.getContent, {
  //         query: `{contentList(app_token:"${localStorage.getItem(
  //           "app_token"
  //         )}",product_key:"${localStorage.getItem(
  //           "product_key"
  //         )}", page:1,per_page:10,content_asset_type:"1",sort_by:"otn"){ page_info{total_count} content_list{content_uuid content_name content_desc content_permalink content_search_tag content_category_uuid content_sub_category_uuid content_template_uuid content_parent_uuid content_asset_type content_asset_uuid content_trailer_uuid content_poster_uuid content_banner_uuid content_app_poster_uuid store_key app_token product_key content_user_uuid content_accessibility content_created_date content_updated_date content_trans{ content_trans_uuid content_trans_field_uuid content_trans_field_value content_trans_content_uuid} categories{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date sub_category{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date}} content_created_by content_updated_by content_level tags posters{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} banners{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} content_tvapp_poster_uuid content_mobileapp_poster_uuid content_tvapp_banner_uuid content_mobileapp_banner_uuid app_poster_details{image_uuid file_name file_url}  is_encoded cast_details{cast_uuid cast_name cast_bio cast_image_uuid created_date cast_image_details{image_uuid file_name file_url} app_token product_key store_key cast_type_details{cast_type_uuid cast_type_name} no_image_available_url}  no_image_available_url permalink_type path is_parent no_of_child_content root_parent_uuid video_details{video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}} trailer_details{video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}}  audio_details{audio_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}     } child_content{content_uuid content_name content_desc content_permalink content_search_tag content_category_uuid content_sub_category_uuid content_template_uuid content_parent_uuid content_asset_type content_asset_uuid content_trailer_uuid content_poster_uuid content_banner_uuid content_app_poster_uuid store_key app_token product_key content_user_uuid content_accessibility content_created_date content_updated_date content_trans{ content_trans_uuid content_trans_field_uuid content_trans_field_value content_trans_content_uuid} categories{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date sub_category{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date}} content_created_by content_updated_by content_level tags posters{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} banners{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} content_tvapp_poster_uuid content_mobileapp_poster_uuid content_tvapp_banner_uuid content_mobileapp_banner_uuid app_poster_details{image_uuid file_name file_url}  is_encoded cast_details{cast_uuid cast_name cast_bio cast_image_uuid created_date cast_image_details{image_uuid file_name file_url} app_token product_key store_key cast_type_details{cast_type_uuid cast_type_name} no_image_available_url}  no_image_available_url permalink_type path is_parent no_of_child_content root_parent_uuid video_details{video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}} trailer_details{video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}}  audio_details{audio_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url} encoded_url{resolution url} offline_url{resolution url}     }   }    }}}`,
  //       });
  //       console.log(content);
  //     } catch (err) {
  //       // document.location.reload();
  //     }
  // });

  return (
    <VideoDetailsPage
      title="abc"
      description="jhsdw"
      imageUrl="hjwbifk"
      videoId={params.videoId}
    />
  );
};

export default Details;
